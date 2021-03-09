import { AnyAction } from 'redux';
import { eventChannel } from 'redux-saga';
import { all, fork, take, call, put, takeLatest } from 'redux-saga/effects';
import { WebSocketLeagueTopicClient } from '@libs';
import { LeagueTopicSocketActions, LeagueTopicSocketTypes } from '@actions';
import { message } from '@utils';
import CONSTANTS from '@locale/en-CA';

function subscribe(options: any) {
    const { eventHandler } = options;
    return eventChannel((emitter) =>
        eventHandler(WebSocketLeagueTopicClient.socket, emitter)
    );
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
        WebSocketLeagueTopicClient.socket?.send(data);
        yield put(LeagueTopicSocketActions.writeSuccess());
    } catch (err) {
        yield put(LeagueTopicSocketActions.writeFailure());
    }
}

function* init({ data, options }: AnyAction) {
    try {
        // maybe notify the server that the user has logged in?
        const status = yield WebSocketLeagueTopicClient.init(data.uuid);
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
        yield WebSocketLeagueTopicClient.terminate();
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
