import { call, put } from 'redux-saga/effects';
import { ScoreService } from '@services';
import ContestPageSiderContentParticipantActiveContestActiveActions from './actions';

export function* initSheet(uuid: string) {
    const { sheets: sheet, _metadata: metadata } = yield call(
        ScoreService.fetchScoreContestParticipantSheet,
        uuid,
        'me'
    );

    yield put(
        ContestPageSiderContentParticipantActiveContestActiveActions.setSheet(
            sheet
        )
    );
}
