import { AnyAction } from 'redux';
import { eventChannel } from 'redux-saga';
import { all, fork, take, call, put, takeEvery } from 'redux-saga/effects';
import { get as _get } from 'lodash';
import { SocketActions, SocketTypes } from '@actions';
import { message } from '@utils';
import CONSTANTS from '@locale/en-CA';

function subscribe(ws: any, options: any) {
    const { eventHandler } = options;
    return eventChannel((emitter) => eventHandler(ws.socket, emitter));
}

function* read(ws: any, options: any) {
    const channel: any = yield call(subscribe, ws, options);
    while (true) {
        let action = yield take(channel);
        yield put(action);
    }
}

function* write({ ws, data }: AnyAction) {
    try {
        ws.socket?.send(data);
        yield put(SocketActions.writeSuccess());
    } catch (err) {
        yield put(SocketActions.writeFailure());
    }
}

function* init({ ws, data, options }: AnyAction) {
    try {
        // dont init if we are already connected
        const uuid = _get(data, ['uuid']);
        console.log(ws.status());
        if (!ws.status()) {
            const status = yield ws.init(uuid);
            if (!status) {
                throw new Error();
            }
            yield fork(read, ws, options);
        }
    } catch (err) {
        console.error(err);
        message.error(CONSTANTS.SOCKET.ERROR.INIT);
    }
}

function* terminate({ ws }: AnyAction) {
    try {
        yield ws.terminate();
        yield put(SocketActions.terminateSuccess());
    } catch (err) {
        message.error(CONSTANTS.SOCKET.ERROR.TERMINATE);
        yield put(SocketActions.terminateFailure(err));
    }
}

export default function* SocketSaga() {
    yield all([
        takeEvery(SocketTypes.INIT, init),
        takeEvery(SocketTypes.TERMINATE, terminate),
        takeEvery(SocketTypes.WRITE, write),
    ]);
}
