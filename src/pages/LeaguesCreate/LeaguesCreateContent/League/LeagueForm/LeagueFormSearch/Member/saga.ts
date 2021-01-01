import { AnyAction } from 'redux';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { AccountService } from '@services';
import LeaguesCreatePageContentLeagueSearchMemberActions, {
    LeaguesCreatePageContentLeagueSearchMemberTypes,
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
            LeaguesCreatePageContentLeagueSearchMemberActions.searchSuccess(
                accounts
            )
        );
    } catch (err) {
        yield put(
            LeaguesCreatePageContentLeagueSearchMemberActions.searchFailure(err)
        );
    }
}

export default function* LeaguesCreatePageContentLeagueSaga() {
    yield all([
        takeLatest(
            LeaguesCreatePageContentLeagueSearchMemberTypes.SEARCH,
            search
        ),
    ]);
}
