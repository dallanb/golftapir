import { all, put, takeLatest } from 'redux-saga/effects';
import HomePageSiderContentCalendarActions, {
    HomePageSiderContentCalendarTypes,
} from './actions';

function* init() {
    try {
        yield put(HomePageSiderContentCalendarActions.initSuccess());
    } catch (err) {
        yield put(HomePageSiderContentCalendarActions.initFailure(err));
    }
}

export default function* HomePageSiderContentCalendarSaga() {
    yield all([takeLatest(HomePageSiderContentCalendarTypes.INIT, init)]);
}
