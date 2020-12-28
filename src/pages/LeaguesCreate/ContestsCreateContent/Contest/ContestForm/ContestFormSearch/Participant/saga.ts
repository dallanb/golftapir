import { AnyAction } from 'redux';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { AccountService } from '@services';
import ContestsCreatePageContentContestSearchParticipantActions, {
    ContestsCreatePageContentContestSearchParticipantTypes,
} from './actions';

// need to add search more somehow
function* search({ key: search }: AnyAction) {
    try {
        const { accounts } = yield call(AccountService.fetchAccounts, {
            page: 1,
            per_page: 10,
            search,
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
