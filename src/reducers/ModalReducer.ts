// @ts-ignore
import { static as Immutable } from 'seamless-immutable';
import { createActions, createReducer } from 'reduxsauce';

const { Types, Creators } = createActions(
    {
        confirmModal: null,
        setMessageModal: ['isOpen', 'data'],
    },
    {
        prefix: 'MODAL_',
    }
);

export const ModalTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */
const INITIAL_STATE = {
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
    [Types.SET_MESSAGE_MODAL]: setMessageModal,
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);
