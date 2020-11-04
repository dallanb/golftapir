// @ts-ignore
import { static as Immutable } from 'seamless-immutable';
import { createReducer } from 'reduxsauce';
import { ModalTypes } from '@actions';

/* ------------- Interface ------------- */
export interface ModalInterface {
    readonly isOpen: boolean;
    readonly headerRenderer: () => any;
    readonly bodyRenderer: () => any;
    readonly footerRenderer: () => any;
    readonly onCancel: () => any;
}

/* ------------- Initial State ------------- */
const INITIAL_STATE: ModalInterface = {
    isOpen: false,
    headerRenderer: () => null,
    bodyRenderer: () => null,
    footerRenderer: () => null,
    onCancel: () => null,
};

/* ------------- Reducers ------------- */
function openModal(
    state = INITIAL_STATE,
    { headerRenderer, bodyRenderer, footerRenderer, onCancel } = INITIAL_STATE
) {
    return Immutable.merge(state, {
        isOpen: true,
        headerRenderer,
        bodyRenderer,
        footerRenderer,
        onCancel,
    });
}

function closeModal(state = INITIAL_STATE) {
    return Immutable.merge(state, INITIAL_STATE);
}

const HANDLERS = {
    [ModalTypes.OPEN_MODAL]: openModal,
    [ModalTypes.CLOSE_MODAL]: closeModal,
};

export default createReducer(INITIAL_STATE, HANDLERS);
