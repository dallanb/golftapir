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
function setPending(state: any, { pending }: NotificationInterface) {
    return Immutable.merge(state, {
        pending,
    });
}

const HANDLERS = {
    [NotificationTypes.SET_PENDING]: setPending,
};

export default createReducer(INITIAL_STATE, HANDLERS);
