import { delay } from 'redux-saga/effects';

export function* initMembers(uuid: string) {
    // Till a better solution is found we need to delay because we try to load
    // the members list before the dom is ready for it
    yield delay(50);
}
