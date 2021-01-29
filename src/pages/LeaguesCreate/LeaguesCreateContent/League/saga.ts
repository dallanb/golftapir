import { AnyAction } from 'redux';
import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { message } from 'antd';
import { omit as _omit, pick as _pick, isEmpty as _isEmpty } from 'lodash';
import CONSTANTS from '@locale/en-CA';
import { AccountService, LeagueService } from '@services';
import { selectMeData } from '@selectors/BaseSelector';
import LeaguesCreatePageContentLeagueActions, {
    LeaguesCreatePageContentLeagueTypes,
} from './actions';
import { prepareInitialValues } from './utils';
import { BaseActions } from '@actions';

function* init({ options }: AnyAction) {
    try {
        const initialValues = prepareInitialValues();
        yield put(
            LeaguesCreatePageContentLeagueActions.setInitialValues(
                initialValues
            )
        );
        yield put(LeaguesCreatePageContentLeagueActions.initSuccess());
    } catch (err) {
        yield put(LeaguesCreatePageContentLeagueActions.initFailure(err));
    }
}

function* submit({ data }: AnyAction) {
    try {
        const leagueData = _omit(data, ['avatar']);
        const {
            leagues: { uuid },
            leagues: result,
        } = yield call(LeagueService.createLeague, leagueData);
        const avatarData = _pick(data, ['avatar']);
        if (!_isEmpty(avatarData)) {
            yield call(LeagueService.assignAvatar, uuid, avatarData.avatar);
        }
        yield put(LeaguesCreatePageContentLeagueActions.setResult(result));
        yield put(LeaguesCreatePageContentLeagueActions.submitSuccess());
        yield put(BaseActions.refreshLeagues());
        message.success(CONSTANTS.LEAGUE.SUCCESS.CREATE);
    } catch (err) {
        yield put(LeaguesCreatePageContentLeagueActions.submitFailure());
        message.error(CONSTANTS.LEAGUE.ERROR.CREATE);
    }
}

export default function* LeaguesCreatePageContentLeagueSaga() {
    yield all([
        takeLatest(LeaguesCreatePageContentLeagueTypes.INIT, init),
        takeLatest(LeaguesCreatePageContentLeagueTypes.SUBMIT, submit),
    ]);
}
