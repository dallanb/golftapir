import { AnyAction } from 'redux';
import { eventChannel } from 'redux-saga';
import { all, fork, take, call, put, takeLatest } from 'redux-saga/effects';
import { isNil as _isNil } from 'lodash';
import { WebSocketNotificationClient } from '@libs';
import { SocketActions, SocketTypes } from '@actions';
import { message } from '@utils';
import CONSTANTS from '@locale/en-CA';
import { notification } from 'antd';

let key: number = 0;
const wsClient = new WebSocketNotificationClient({
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
        yield put(SocketActions.writeSuccess());
    } catch (err) {
        yield put(SocketActions.writeFailure());
    }
}

function* init({ options }: AnyAction) {
    try {
        // maybe notify the server that the user has logged in?
        const status = yield wsClient.init();
        if (!status) {
            throw new Error();
        }
        yield fork(read, options);
    } catch (err) {
        console.error(err);
        message.error(CONSTANTS.SOCKET.ERROR.INIT);
    }
}

function* terminate({}: AnyAction) {
    try {
        yield wsClient.terminate();
        yield put(SocketActions.terminateSuccess());
    } catch (err) {
        message.error(CONSTANTS.SOCKET.ERROR.TERMINATE);
        yield put(SocketActions.terminateFailure(err));
    }
}

export default function* SocketSaga() {
    yield all([
        takeLatest(SocketTypes.INIT, init),
        takeLatest(SocketTypes.TERMINATE, terminate),
        takeLatest(SocketTypes.WRITE, write),
    ]);
}
