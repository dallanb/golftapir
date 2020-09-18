// @ts-ignore
import { static as Immutable } from 'seamless-immutable';
import { createReducer } from 'reduxsauce';
import { ModalTypes } from '@actions';

/* ------------- Interface ------------- */
export interface ModalInterface {
    readonly isOpen: boolean;
    readonly data: any;
}

/* ------------- Initial State ------------- */
const INITIAL_STATE: ModalInterface = {
    isOpen: false,
    data: undefined,
};

/* ------------- Reducers ------------- */
function setMessageModal(
    state = INITIAL_STATE,
    { isOpen = false, data = null }
) {
    return Immutable.merge(state, {
        isOpen,
        data,
    });
}

const HANDLERS = {
    [ModalTypes.SET_MESSAGE_MODAL]: setMessageModal,
};

export default createReducer(INITIAL_STATE, HANDLERS);
