import { call, delay, fork, put, select } from 'redux-saga/effects';
import { ScoreService } from '@services';
import { selectMyUUID } from '@selectors/BaseSelector';
import ContestPageSiderContentParticipantActiveContestActiveActions from './actions';
import { selectSheet } from './selector';

export function* initSheet(uuid: string) {
    const { sheets: sheet, _metadata: metadata }: any = yield call(
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

export function* debouncedHoleStrokeUpdate(
    holeId: string,
    strokes: any,
    cb: (holeId: string) => any
) {
    yield delay(1000);
    cb(holeId);
    try {
        const { uuid, holes }: any = yield select(selectSheet);
        yield fork(ScoreService.updateHole, uuid, holeId, { strokes });
        yield put(
            ContestPageSiderContentParticipantActiveContestActiveActions.holeStrokeUpdateSuccess(
                {
                    [holeId]: { ...holes[holeId], strokes },
                }
            )
        );
    } catch (err) {
        yield put(
            ContestPageSiderContentParticipantActiveContestActiveActions.holeStrokeUpdateFailure(
                err
            )
        );
    }
}
