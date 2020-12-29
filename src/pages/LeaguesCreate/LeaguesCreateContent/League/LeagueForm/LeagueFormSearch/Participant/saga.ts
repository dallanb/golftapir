import { AnyAction } from 'redux';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { AccountService } from '@services';
import LeaguesCreatePageContentLeagueSearchParticipantActions, {
    LeaguesCreatePageContentLeagueSearchParticipantTypes,
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
            LeaguesCreatePageContentLeagueSearchParticipantActions.searchSuccess(
                accounts
            )
        );
    } catch (err) {
        yield put(
            LeaguesCreatePageContentLeagueSearchParticipantActions.searchFailure(
                err
            )
        );
    }
}

export default function* LeaguesCreatePageContentLeagueSaga() {
    yield all([
        takeLatest(
            LeaguesCreatePageContentLeagueSearchParticipantTypes.SEARCH,
            search
        ),
    ]);
}
