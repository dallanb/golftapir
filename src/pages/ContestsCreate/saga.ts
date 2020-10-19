import { AnyAction } from 'redux';
import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { pick as _pick, omit as _omit, isEmpty as _isEmpty } from 'lodash';
import config from 'config';
import ContestsCreatePageActions, { ContestsCreatePageTypes } from './actions';
import { selectMe } from '@selectors/BaseSelector';
import {
    searchAccounts,
    createContest as createContestHelper,
    assignContestAvatar,
    fetchAccountMembership,
} from '@helpers';

function* init({ options }: AnyAction) {
    try {
        const me = yield select(selectMe);
        const createFormInitialValues = {
            owner_uuid: me.membership_uuid,
            sport_uuid: config.GOLF_UUID,
            participants: [me.membership_uuid],
            permanent_participants: [me],
        };
        if (options && options.participant_uuid) {
            const { data: membershipData } = yield call(
                fetchAccountMembership,
                options.participant_uuid,
                {}
            );
            createFormInitialValues.participants.push(options.participant_uuid);
            createFormInitialValues.permanent_participants.push(membershipData);
        }
        yield put(ContestsCreatePageActions.set({ createFormInitialValues }));
        yield put(ContestsCreatePageActions.initSuccess());
    } catch (err) {
        yield put(ContestsCreatePageActions.initFailure(err));
    }
}

function* searchParticipants({ key }: AnyAction) {
    try {
        const { data } = yield call(searchAccounts, key);
        yield put(ContestsCreatePageActions.searchParticipantsSuccess(data));
    } catch (err) {
        yield put(ContestsCreatePageActions.searchParticipantsFailure(err));
    }
}

function* createContest({ data }: AnyAction) {
    try {
        const contestData = _omit(data, ['avatar']);
        const {
            data: { uuid },
        } = yield call(createContestHelper, contestData);
        const avatarData = _pick(data, ['avatar']);
        if (!_isEmpty(avatarData)) {
            yield call(assignContestAvatar, uuid, avatarData.avatar);
        }
        yield put(ContestsCreatePageActions.createContestSuccess({ uuid }));
    } catch (err) {
        yield put(ContestsCreatePageActions.createContestFailure(err));
    }
}

export default function* ContestsCreatePageSaga() {
    yield all([
        takeLatest(ContestsCreatePageTypes.INIT, init),
        takeLatest(
            ContestsCreatePageTypes.SEARCH_PARTICIPANTS,
            searchParticipants
        ),
        takeLatest(ContestsCreatePageTypes.CREATE_CONTEST, createContest),
    ]);
}
