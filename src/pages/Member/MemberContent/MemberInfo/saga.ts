import { all, put, select, takeLatest } from 'redux-saga/effects';
import MemberPageContentMemberInfoActions, {
    MemberPageContentMemberInfoTypes,
} from './actions';
import { selectMember } from '@pages/Member/selector';
import { prepareInitialValues } from './utils';

function* init() {
    try {
        const member = yield select(selectMember);
        const initialValues = prepareInitialValues(member);
        yield put(
            MemberPageContentMemberInfoActions.setInitialValues({
                ...initialValues,
            })
        );
        yield put(MemberPageContentMemberInfoActions.initSuccess());
    } catch (err) {
        yield put(MemberPageContentMemberInfoActions.initFailure(err));
    }
}

export default function* MemberPageContentMemberInfoSaga() {
    yield all([takeLatest(MemberPageContentMemberInfoTypes.INIT, init)]);
}
