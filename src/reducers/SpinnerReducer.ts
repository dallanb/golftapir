// @ts-ignore
import { static as Immutable } from 'seamless-immutable';
import { createReducer } from 'reduxsauce';
import { SpinnerTypes } from '@actions';

/* ------------- Interface ------------- */
export interface SpinnerInterface {
    readonly isOpen: boolean;
    readonly message?: string;
}

/* ------------- Initial State ------------- */
const INITIAL_STATE: SpinnerInterface = {
    isOpen: false,
    message: undefined,
};

/* ------------- Reducers ------------- */
function openSpinner(state = INITIAL_STATE, { message }: any) {
    return Immutable.merge(state, {
        isOpen: true,
        message,
    });
}

function closeSpinner(state = INITIAL_STATE) {
    return Immutable.merge(state, INITIAL_STATE);
}

const HANDLERS = {
    [SpinnerTypes.OPEN_SPINNER]: openSpinner,
    [SpinnerTypes.CLOSE_SPINNER]: closeSpinner,
};

export default createReducer(INITIAL_STATE, HANDLERS);
