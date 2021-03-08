import React from 'react';
import { Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { MessageModalProps } from './types';
import { selectModalData } from '@selectors/ModalSelector';
import defaultFooterRenderer from './defaultFooterRenderer';
import './MessageModal.less';
import { ModalActions } from '@actions';

const MessageModal: React.FunctionComponent<MessageModalProps> = () => {
    const {
        isOpen,
        headerRenderer,
        bodyRenderer,
        footerRenderer = defaultFooterRenderer,
        onCancel,
    } = useSelector(selectModalData);

    const Title = headerRenderer();
    const Body = bodyRenderer();
    const Footer = footerRenderer();

    const dispatch = useDispatch();
    const handleCancel = () => {
        onCancel && onCancel();
        dispatch(ModalActions.closeModal());
    };

    return (
        <Modal
            visible={isOpen}
            title={Title}
            footer={Footer}
            onCancel={handleCancel}
        >
            {Body}
        </Modal>
    );
};

export default MessageModal;
