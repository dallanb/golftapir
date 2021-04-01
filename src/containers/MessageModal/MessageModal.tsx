import React from 'react';
import { Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { MessageModalProps } from './types';
import { selectModalData } from '@selectors/ModalSelector';
import defaultFooterRenderer from './defaultFooterRenderer';
import { ModalActions } from '@actions';
import './MessageModal.less';

const MessageModal: React.FunctionComponent<MessageModalProps> = () => {
    const {
        isOpen,
        headerRenderer,
        bodyRenderer,
        footerRenderer = defaultFooterRenderer,
        onCancel,
    } = useSelector(selectModalData);
    const dispatch = useDispatch();
    const history = useHistory();
    const params = useParams();

    const Title = headerRenderer({ dispatch, history, params });
    const Body = bodyRenderer({ dispatch, history, params });
    const Footer = footerRenderer({ dispatch, history, params });

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
