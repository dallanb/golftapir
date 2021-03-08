import { AnyAction } from 'redux';
import { eventChannel } from 'redux-saga';
import { all, fork, take, call, put, takeLatest } from 'redux-saga/effects';
import { WebSocketContestTopicClient } from '@libs';
import { ContestTopicSocketActions, ContestTopicSocketTypes } from '@actions';
import { message } from '@utils';
import CONSTANTS from '@locale/en-CA';

function subscribe(options: any) {
    const { eventHandler } = options;
    return eventChannel((emitter) =>
        eventHandler(WebSocketContestTopicClient.socket, emitter)
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
        WebSocketContestTopicClient.socket?.send(data);
        yield put(ContestTopicSocketActions.writeSuccess());
    } catch (err) {
        yield put(ContestTopicSocketActions.writeFailure());
    }
}

function* init({ data, options }: AnyAction) {
    try {
        // maybe notify the server that the user has logged in?
        const status = yield WebSocketContestTopicClient.init(data.uuid);
        if (!status) {
            throw new Error();
        }
        yield fork(read, options);
        yield put(ContestTopicSocketActions.initSuccess());
    } catch (err) {
        console.error(err);
        message.error(CONSTANTS.SOCKET.ERROR.INIT);
    }
}

function* terminate({}: AnyAction) {
    try {
        yield WebSocketContestTopicClient.terminate();
        yield put(ContestTopicSocketActions.terminateSuccess());
    } catch (err) {
        message.error(CONSTANTS.SOCKET.ERROR.TERMINATE);
        yield put(ContestTopicSocketActions.terminateFailure(err.toJSON()));
    }
}

export default function* ContestTopicSocketSaga() {
    yield all([
        takeLatest(ContestTopicSocketTypes.INIT, init),
        takeLatest(ContestTopicSocketTypes.TERMINATE, terminate),
        takeLatest(ContestTopicSocketTypes.WRITE, write),
    ]);
}
