import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'antd';
import { ContestSiderPendingProps } from './types';
import ContestPageActions from '@pages/Contest/actions';
import { selectParticipant } from '@pages/Contest/selector';
import constants from '@constants';
import './ContestSiderPending.scss';

const ContestSiderPending: React.FunctionComponent<ContestSiderPendingProps> = () => {
    const dispatch = useDispatch();
    const participant = useSelector(selectParticipant);
    const handleAcceptClick = () => {
        dispatch(
            ContestPageActions.updateContestParticipantStatus(
                participant.uuid,
                constants.STATUS.ACTIVE.KEY
            )
        );
    };

    const handleDeclineClick = () => {
        dispatch(
            ContestPageActions.updateContestParticipantStatus(
                participant.uuid,
                constants.STATUS.INACTIVE.KEY
            )
        );
    };

    return (
        <div className="contest-sider-pending">
            PLEASE RESPOND TO CONTEST REQUEST BELOW
            <div className="contest-sider-pending-buttons">
                <div className="contest-sider-pending-buttons-button active">
                    <Button block type="primary" onClick={handleAcceptClick}>
                        Accept
                    </Button>
                </div>
                <div className="contest-sider-pending-buttons-button decline">
                    <Button
                        block
                        danger
                        type="primary"
                        onClick={handleDeclineClick}
                    >
                        Decline
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ContestSiderPending;
