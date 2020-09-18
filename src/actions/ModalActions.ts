import { createActions } from 'reduxsauce';

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
