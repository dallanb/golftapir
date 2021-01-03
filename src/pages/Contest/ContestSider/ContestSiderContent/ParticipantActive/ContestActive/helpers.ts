import { call, put, select } from 'redux-saga/effects';
import { ScoreService } from '@services';
import { selectMyUUID } from '@selectors/BaseSelector';
import ContestPageSiderContentParticipantActiveContestActiveActions from './actions';

export function* initSheet(uuid: string) {
    const { sheets: sheet, _metadata: metadata } = yield call(
        ScoreService.fetchScoreContestParticipantSheet,
        uuid,
        yield select(selectMyUUID)
    );

    yield put(
        ContestPageSiderContentParticipantActiveContestActiveActions.setSheet(
            sheet
        )
    );
}
