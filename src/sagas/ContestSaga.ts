import { AnyAction } from 'redux';
import {
    all,
    call,
    put,
    race,
    select,
    take,
    takeLatest,
} from 'redux-saga/effects';
import { message } from 'antd';
import _ from 'lodash';
import ContestActions, { ContestTypes } from '@reducers/ContestReducer';
import AccountActions, { AccountTypes } from '@reducers/AccountReducer';
import { ContestService } from '@services';
import CONSTANTS from '@locale/en-CA';
import { selectData } from '@selectors/ContestSelectors';
import { withTarget } from '@utils';

function* fetchContest({ uuid, options, target }: AnyAction) {
    try {
        const res = yield call(ContestService.fetchContest, uuid, options);
        console.log(res);
        const { contests, _metadata: metadata } = res;
        yield put(
            withTarget(ContestActions.fetchContestSuccess, target)(
                contests,
                metadata
            )
        );
    } catch (err) {
        yield put(withTarget(ContestActions.fetchContestFailure, target)(err));
        message.error(CONSTANTS.CONTEST.ERROR.FETCH);
    }
}
function* fetchContests({ options, append, target }: AnyAction) {
    try {
        const res = yield call(ContestService.fetchContests, options);
        const { contests, _metadata: metadata } = res;
        const data = append ? yield select(selectData) : [];
        yield put(
            withTarget(ContestActions.fetchContestsSuccess, target)(
                [...data, ...contests],
                metadata
            )
        );
    } catch (err) {
        yield put(withTarget(ContestActions.fetchContestsFailure, target)(err));
        message.error(CONSTANTS.CONTEST.ERROR.FETCH);
    }
}
function* createContest({ data, target }: any) {
    try {
        const res = yield call(ContestService.createContest, data);
        console.log(res);
        yield put(withTarget(ContestActions.createContestSuccess, target)());
        message.success(CONSTANTS.CONTEST.SUCCESS.CREATE);
    } catch (err) {
        yield put(withTarget(ContestActions.createContestFailure, target)(err));
        message.error(CONSTANTS.CONTEST.ERROR.CREATE);
    }
}

function* fetchContestParticipants({ uuid, target }: any) {
    try {
        // const res = yield call(ContestService.fetchContest, uuid, {
        //     include: 'participants',
        // });
        yield put(
            withTarget(ContestActions.fetchContest, target)(uuid, {
                include: 'participants',
            })
        );

        const { failure } = yield race({
            success: take(ContestTypes.FETCH_CONTEST_SUCCESS),
            failure: take(ContestTypes.FETCH_CONTEST_FAILURE),
        });

        if (failure) {
            throw new Error(CONSTANTS.CONTEST.ERROR.FETCH);
        }

        console.log(yield select(selectData));

        const { participants = [] } = yield select(selectData); // does target play any part in this selection???

        const participantsUUIDs = participants.map(
            ({ uuid }: { uuid: string }) => uuid
        );

        console.log(participantsUUIDs);
        if (!participantsUUIDs.length) {
            yield put(
                withTarget(
                    ContestActions.fetchContestParticipantsSuccess,
                    target
                )(participantsUUIDs)
            );
        } else {
            yield put(
                withTarget(
                    AccountActions.bulkFetchAccounts,
                    target
                )(participantsUUIDs, { include: 'participants' })
            );
            const { success, failure } = yield race({
                success: take(AccountTypes.BULK_FETCH_ACCOUNTS_SUCCESS),
                failure: take(AccountTypes.BULK_FETCH_ACCOUNTS_FAILURE),
            });
            console.log(success);
        }
    } catch (err) {
        yield put(
            withTarget(
                ContestActions.fetchContestParticipantsFailure,
                target
            )(err)
        );
        message.error(CONSTANTS.CONTEST.ERROR.FETCH_PARTICIPANTS);
    }
}

export default function* ContestSaga() {
    yield all([
        takeLatest(ContestTypes.FETCH_CONTEST, fetchContest),
        takeLatest(ContestTypes.FETCH_CONTESTS, fetchContests),
        takeLatest(ContestTypes.CREATE_CONTEST, createContest),
        takeLatest(
            ContestTypes.FETCH_CONTEST_PARTICIPANTS,
            fetchContestParticipants
        ),
    ]);
}
