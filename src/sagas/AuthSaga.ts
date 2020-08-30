import { all, takeLatest } from 'redux-saga/effects';
import { message } from 'antd';
import { AuthTypes } from '../reducers/AuthReducer';

function* login({
    username,
    password,
}: {
    username: string;
    password: string;
}) {
    try {
        message.success('Registration successful!');
    } catch (err) {
        message.error('Could not create user');
    }
}

export default function* UserSaga() {
    yield all([takeLatest(AuthTypes.LOGIN, login)]);
}
