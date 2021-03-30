import { AnyAction } from 'redux';
import { eventChannel } from 'redux-saga';
import { all, fork, take, call, put, takeLatest } from 'redux-saga/effects';
import { WebSocketLeagueTopicClient } from '@libs';
import { LeagueTopicSocketActions, LeagueTopicSocketTypes } from '@actions';
import { message } from '@utils';
import CONSTANTS from '@locale/en-CA';
import { notification } from 'antd';

let key: number = 0;
const wsClient = new WebSocketLeagueTopicClient({
    errorHandler: (code: number) => {
        key = code;
        notification.error({
            key: key.toString(),
            message: 'Unable to connect to live updates',
            placement: 'bottomRight',
            duration: 0,
        });
    },
    reconnectHandler: () => {
        notification.close(key.toString());
        notification.success({
            key: key.toString(),
            message: 'Reconnected to live updates',
            placement: 'bottomRight',
            duration: 5,
        });
    },
});

function subscribe(options: any) {
    const { eventHandler } = options;
    return eventChannel((emitter) => eventHandler(wsClient.socket, emitter));
}

function* read(options: any) {
    const channel: any = yield call(subscribe, options);
    while (true) {
        let action = yield take(channel);
        yield put(action);
    }
}

function* write({ data }: AnyAction) {
    try {
        wsClient.socket?.send(data);
        yield put(LeagueTopicSocketActions.writeSuccess());
    } catch (err) {
        yield put(LeagueTopicSocketActions.writeFailure());
    }
}

function* init({ data, options }: AnyAction) {
    try {
        // maybe notify the server that the user has logged in?
        const status = yield wsClient.init(data.uuid);
        if (!status) {
            throw new Error();
        }
        yield fork(read, options);
        yield put(LeagueTopicSocketActions.initSuccess());
    } catch (err) {
        console.error(err);
        message.error(CONSTANTS.SOCKET.ERROR.INIT);
    }
}

function* terminate({}: AnyAction) {
    try {
        yield wsClient.terminate();
        yield put(LeagueTopicSocketActions.terminateSuccess());
    } catch (err) {
        message.error(CONSTANTS.SOCKET.ERROR.TERMINATE);
        yield put(LeagueTopicSocketActions.terminateFailure(err));
    }
}

export default function* LeagueTopicSocketSaga() {
    yield all([
        takeLatest(LeagueTopicSocketTypes.INIT, init),
        takeLatest(LeagueTopicSocketTypes.TERMINATE, terminate),
        takeLatest(LeagueTopicSocketTypes.WRITE, write),
    ]);
}
