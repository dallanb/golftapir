import { call, put } from 'redux-saga/effects';
import { fetchMyScoreContestParticipantSheet } from '@helpers';
import ContestPageSiderContentParticipantActiveContestActiveActions from './actions';

export function* initSheet(uuid: string) {
    const { data: sheet } = yield call(
        fetchMyScoreContestParticipantSheet,
        uuid,
        'me'
    );
    yield put(
        ContestPageSiderContentParticipantActiveContestActiveActions.setSheet(
            sheet
        )
    );
}
