import { AnyAction } from 'redux';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { searchAccounts } from '@helpers';
import ContestsCreatePageContentContestSearchParticipantActions, {
    ContestsCreatePageContentContestSearchParticipantTypes,
} from './actions';

function* search({ key }: AnyAction) {
    try {
        const { data } = yield call(searchAccounts, key);
        yield put(
            ContestsCreatePageContentContestSearchParticipantActions.searchSuccess(
                data
            )
        );
    } catch (err) {
        yield put(
            ContestsCreatePageContentContestSearchParticipantActions.searchFailure(
                err
            )
        );
    }
}

export default function* ContestsCreatePageContentContestSaga() {
    yield all([
        takeLatest(
            ContestsCreatePageContentContestSearchParticipantTypes.SEARCH,
            search
        ),
    ]);
}
