// @ts-ignore
import { static as Immutable } from 'seamless-immutable';
import { createReducer } from 'reduxsauce';
import { NotificationTypes } from '@actions';

/* ------------- Interface ------------- */
export interface NotificationInterface {
    readonly pending: number;
}

/* ------------- Initial State ------------- */
const INITIAL_STATE: NotificationInterface = {
    pending: 0,
};

/* ------------- Reducers ------------- */
const fetchPendingSuccess = (state: any, { pending }: NotificationInterface) =>
    Immutable.merge(state, {
        pending,
    });

const fetchPendingFailure = (state: any, { err }: any) =>
    Immutable.merge(state, {
        err,
        pending: INITIAL_STATE.pending,
    });

const HANDLERS = {
    [NotificationTypes.FETCH_PENDING_SUCCESS]: fetchPendingSuccess,
    [NotificationTypes.FETCH_PENDING_FAILURE]: fetchPendingFailure,
};

export default createReducer(INITIAL_STATE, HANDLERS);
