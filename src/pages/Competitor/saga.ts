import { AnyAction } from 'redux';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { MemberService } from '@services';
import CompetitorPageActions, { CompetitorPageTypes } from './actions';

function* preInit({ data: member }: AnyAction) {
    yield put(CompetitorPageActions.set({ member }));
}

function* init({ uuid }: AnyAction) {
    try {
        const { members: member } = yield call(
            MemberService.fetchMember,
            uuid,
            {
                include: 'avatar',
            }
        );
        yield put(CompetitorPageActions.set({ member }));
        yield put(CompetitorPageActions.initSuccess());
    } catch (err) {
        yield put(CompetitorPageActions.initFailure(err));
    }
}

export default function* CompetitorPageSaga() {
    yield all([
        takeLatest(CompetitorPageTypes.PRE_INIT, preInit),
        takeLatest(CompetitorPageTypes.INIT, init),
    ]);
}
