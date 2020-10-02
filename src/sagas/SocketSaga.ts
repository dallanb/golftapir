import { AnyAction } from 'redux';
import { eventChannel } from 'redux-saga';
import { all, fork, take, call, put, takeLatest } from 'redux-saga/effects';
import { WebSocketClient } from '@libs';
import { SocketActions, SocketTypes } from '@actions';
import Socket = SocketIOClient.Socket;
import { message } from 'antd';
import CONSTANTS from '@locale/en-CA';

function subscribe(socket: Socket, options: any) {
    const { eventHandler } = options;
    return eventChannel((emitter) => eventHandler(socket, emitter));
}

function* read(socket: Socket, options: any) {
    const channel = yield call(subscribe, socket, options);
    while (true) {
        let action = yield take(channel);
        yield put(action);
    }
}

function* write({ data }: AnyAction) {
    try {
        WebSocketClient.socket?.emit('message', data);
        yield put(SocketActions.writeSuccess());
    } catch (err) {
        yield put(SocketActions.writeFailure());
    }
}

function* init({ data, options }: AnyAction) {
    try {
        // maybe notify the server that the user has logged in?
        yield call(WebSocketClient.init, data.uuid);
        if (!WebSocketClient.socket) {
            throw new Error();
        }
        yield fork(read, WebSocketClient.socket, options);
    } catch (err) {
        message.error(CONSTANTS.SOCKET.ERROR.INIT);
    }
}

export default function* SocketSaga() {
    yield all([
        takeLatest(SocketTypes.INIT, init),
        takeLatest(SocketTypes.WRITE, write),
    ]);
}
