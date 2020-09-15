import React from 'react';
import { Button, Modal } from 'antd';
import { connect } from 'react-redux';
import { MessageModalProps } from './types';
import ModalActions, { ModalInterface } from '@reducers/ModalReducer';
import './MessageModal.scss';

class MessageModal extends React.PureComponent<MessageModalProps> {
    acknowledgeModal = () => {
        const { closeModal, confirmModal } = this.props;
        closeModal();
        confirmModal();
    };

    render() {
        const {
            data = {
                head: '',
                body: '',
            },
            isOpen,
        } = this.props;

        return (
            <Modal
                visible={isOpen}
                title={data.head}
                footer={[
                    <Button
                        className="btn-colored btn-green fixed-height-btn admin-tool-font no-focus-outline"
                        onClick={this.acknowledgeModal}
                    >
                        OK
                    </Button>,
                ]}
            >
                {data.body}
            </Modal>
        );
    }
}

const mapStateToProps = ({ modal }: { modal: ModalInterface }) => {
    return {
        isOpen: modal.isOpen,
        data: modal.data,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        closeModal() {
            return dispatch(ModalActions.setMessageModal(false, {}));
        },
        confirmModal() {
            return dispatch(ModalActions.confirmModal());
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageModal);
