import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions(
    {
        closeModal: null,
        openModal: [
            'headerRenderer',
            'bodyRenderer',
            'footerRenderer',
            'onCancel',
        ],
    },
    {
        prefix: 'MODAL_',
    }
);

export const ModalTypes = Types;
export default Creators;
