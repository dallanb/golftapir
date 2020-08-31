import { all, fork } from 'redux-saga/effects';

/* ------------- Sagas ------------- */
import AuthSaga from './AuthSaga';
import ModalSaga from './ModalSaga';

/* ------------- Connect Types To Sagas ------------- */
export default function* root() {
    yield all([fork(AuthSaga), fork(ModalSaga)]);
}
