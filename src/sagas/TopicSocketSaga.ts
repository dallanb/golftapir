import { AnyAction } from 'redux';
import { eventChannel } from 'redux-saga';
import { all, fork, take, call, put, takeLatest } from 'redux-saga/effects';
import { WebSocketTopicClient } from '@libs';
import { TopicSocketActions, TopicSocketTypes } from '@actions';
import { message } from 'antd';
import CONSTANTS from '@locale/en-CA';

function subscribe(options: any) {
    const { eventHandler } = options;
    return eventChannel((emitter) =>
        eventHandler(WebSocketTopicClient.socket, emitter)
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
        WebSocketTopicClient.socket?.send(data);
        yield put(TopicSocketActions.writeSuccess());
    } catch (err) {
        yield put(TopicSocketActions.writeFailure());
    }
}

function* init({ data, options }: AnyAction) {
    try {
        // maybe notify the server that the user has logged in?
        yield WebSocketTopicClient.init(data.uuid);
        if (!WebSocketTopicClient.status()) {
            throw new Error();
        }
        WebSocketTopicClient.send('Thank you for the invite');
        yield fork(read, options);
    } catch (err) {
        console.log(err);
        message.error(CONSTANTS.SOCKET.ERROR.INIT);
    }
}

// work on terminating web socket connection and adding some handling in client.ts
function* terminate({ data }: AnyAction) {
    try {
    } catch (err) {
        message.error(CONSTANTS.SOCKET.ERROR.TERMINATE);
    }
}

export default function* TopicSocketSaga() {
    yield all([
        takeLatest(TopicSocketTypes.INIT, init),
        takeLatest(TopicSocketTypes.WRITE, write),
    ]);
}
