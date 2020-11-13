import { AnyAction } from 'redux';
import { eventChannel } from 'redux-saga';
import { all, fork, take, call, put, takeLatest } from 'redux-saga/effects';
import { WebSocketNotificationClient } from '@libs';
import { SocketActions, SocketTypes } from '@actions';
import { message } from 'antd';
import CONSTANTS from '@locale/en-CA';

function subscribe(options: any) {
    const { eventHandler } = options;
    return eventChannel((emitter) =>
        eventHandler(WebSocketNotificationClient.socket, emitter)
    );
}

function* read(options: any) {
    const channel = yield call(subscribe, options);
    while (true) {
        let action = yield take(channel);
        yield put(action);
    }
}

function* write({ data }: AnyAction) {
    try {
        WebSocketNotificationClient.socket?.send(data);
        yield put(SocketActions.writeSuccess());
    } catch (err) {
        yield put(SocketActions.writeFailure());
    }
}

function* init({ data, options }: AnyAction) {
    try {
        // maybe notify the server that the user has logged in?
        yield WebSocketNotificationClient.init(data.uuid);
        if (!WebSocketNotificationClient.status()) {
            throw new Error();
        }
        WebSocketNotificationClient.send('Thank you for the invite');
        yield fork(read, options);
    } catch (err) {
        console.log(err);
        message.error(CONSTANTS.SOCKET.ERROR.INIT);
    }
}

export default function* SocketSaga() {
    yield all([
        takeLatest(SocketTypes.INIT, init),
        takeLatest(SocketTypes.WRITE, write),
    ]);
}
