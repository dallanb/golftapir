import { AnyAction } from 'redux';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { AccountService } from '@services';
import ContestsCreatePageContentContestSearchParticipantActions, {
    ContestsCreatePageContentContestSearchParticipantTypes,
} from './actions';

function* search({ key }: AnyAction) {
    try {
        const { accounts } = yield call(AccountService.searchAccounts, {
            key,
            fields: 'name',
        });
        yield put(
            ContestsCreatePageContentContestSearchParticipantActions.searchSuccess(
                accounts
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
