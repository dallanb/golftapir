import { AnyAction } from 'redux';
import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { message } from '@utils';
import ScoreActions, { ScoreTypes } from '@actions/ScoreActions';
import { ScoreService } from '@services';
import CONSTANTS from '@locale/en-CA';

function* fetchScore({ uuid, options }: AnyAction) {
    try {
        const res: any = yield call(ScoreService.fetchScore, uuid, options);
        const { scores, _metadata: metadata } = res;
        yield put(ScoreActions.fetchScoreSuccess(scores, metadata));
    } catch (err) {
        yield put(ScoreActions.fetchScoreFailure(err));
        message.error(CONSTANTS.SCORE.ERROR.FETCH);
    }
}
function* fetchScoreContest({ uuid, options }: AnyAction) {
    try {
        const res: any = yield call(
            ScoreService.fetchScoreContest,
            uuid,
            options
        );
        const { scores, _metadata: metadata } = res;
        yield put(ScoreActions.fetchScoreContestSuccess(scores, metadata));
    } catch (err) {
        yield put(ScoreActions.fetchScoreContestFailure(err));
        message.error(CONSTANTS.SCORE.ERROR.FETCH_CONTEST);
    }
}
function* fetchScoreContestParticipantSheet({
    uuid,
    member_uuid,
    options,
}: AnyAction) {
    try {
        const res: any = yield call(
            ScoreService.fetchScoreContestParticipantSheet,
            uuid,
            member_uuid,
            options
        );
        const { sheets, _metadata: metadata } = res;
        yield put(
            ScoreActions.fetchScoreContestParticipantSheetSuccess(
                sheets,
                metadata
            )
        );
    } catch (err) {
        yield put(ScoreActions.fetchScoreContestParticipantSheetFailure(err));
        message.error(CONSTANTS.SCORE.ERROR.FETCH_CONTEST);
    }
}

function* updateScore({ uuid, data }: AnyAction) {
    try {
        const res: any = yield call(ScoreService.updateScore, uuid, data);
        const { scores } = res;
        yield put(ScoreActions.updateScoreSuccess(scores));
    } catch (err) {
        yield put(ScoreActions.updateScoreFailure(err));
        message.error(CONSTANTS.SCORE.ERROR.UPDATE);
    }
}

function* updateSheet({ uuid, data }: AnyAction) {
    try {
        const res: any = yield call(ScoreService.updateSheet, uuid, data);
        const { scores } = res;
        yield put(ScoreActions.updateSheetSuccess(scores));
    } catch (err) {
        yield put(ScoreActions.updateSheetFailure(err));
        message.error(CONSTANTS.SCORE.ERROR.UPDATE_SHEET);
    }
}

function* updateHole({ uuid, holeId, data }: AnyAction) {
    try {
        const res: any = yield call(
            ScoreService.updateHole,
            uuid,
            holeId,
            data
        );
        const { scores } = res;
        yield put(ScoreActions.updateHoleSuccess(scores));
    } catch (err) {
        yield put(ScoreActions.updateHoleFailure(err));
        message.error(CONSTANTS.SCORE.ERROR.UPDATE_SCORE);
    }
}

export default function* ScoreSaga() {
    yield all([
        takeLatest(ScoreTypes.FETCH_SCORE, fetchScore),
        takeLatest(ScoreTypes.FETCH_SCORE_CONTEST, fetchScoreContest),
        takeLatest(
            ScoreTypes.FETCH_SCORE_CONTEST_PARTICIPANT_SHEET,
            fetchScoreContestParticipantSheet
        ),
        takeLatest(ScoreTypes.UPDATE_SCORE, updateScore),
        takeLatest(ScoreTypes.UPDATE_SHEET, updateSheet),
        takeLatest(ScoreTypes.UPDATE_HOLE, updateHole),
    ]);
}
