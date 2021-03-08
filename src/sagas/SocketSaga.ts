import { AnyAction } from 'redux';
import { eventChannel } from 'redux-saga';
import { all, fork, take, call, put, takeLatest } from 'redux-saga/effects';
import { isNil as _isNil } from 'lodash';
import { WebSocketNotificationClient } from '@libs';
import { SocketActions, SocketTypes } from '@actions';
import { message } from '@utils';
import CONSTANTS from '@locale/en-CA';

function subscribe(options: any) {
    const { eventHandler } = options;
    return eventChannel((emitter) =>
        eventHandler(WebSocketNotificationClient.socket, emitter)
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
        WebSocketNotificationClient.socket?.send(data);
        yield put(SocketActions.writeSuccess());
    } catch (err) {
        yield put(SocketActions.writeFailure());
    }
}

function* init({ options }: AnyAction) {
    try {
        // maybe notify the server that the user has logged in?
        const status = yield WebSocketNotificationClient.init();
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
        yield WebSocketNotificationClient.terminate();
        yield put(SocketActions.terminateSuccess());
    } catch (err) {
        message.error(CONSTANTS.SOCKET.ERROR.TERMINATE);
        yield put(SocketActions.terminateFailure(err.toJSON()));
    }
}

export default function* SocketSaga() {
    yield all([
        takeLatest(SocketTypes.INIT, init),
        takeLatest(SocketTypes.TERMINATE, terminate),
        takeLatest(SocketTypes.WRITE, write),
    ]);
}
