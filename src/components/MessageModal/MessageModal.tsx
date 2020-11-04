import React from 'react';
import { Modal } from 'antd';
import { useSelector } from 'react-redux';
import { MessageModalProps } from './types';
import { selectModalData } from '@selectors/ModalSelector';
import './MessageModal.scss';

const MessageModal: React.FunctionComponent<MessageModalProps> = () => {
    const {
        isOpen,
        headerRenderer,
        bodyRenderer,
        footerRenderer,
        onCancel,
    } = useSelector(selectModalData);

    const Title = headerRenderer();
    const Body = bodyRenderer();
    const Footer = footerRenderer();

    // const dispatch = useDispatch();
    // const acknowledgeModal = () => {
    //     dispatch(ModalActions.closeModal());
    //     dispatch(ModalActions.confirmModal());
    // };

    return (
        <Modal
            visible={isOpen}
            title={Title}
            footer={Footer}
            onCancel={onCancel}
        >
            {Body}
        </Modal>
    );
};

export default MessageModal;
