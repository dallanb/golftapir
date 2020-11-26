import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'antd';
import { ParticipantPendingProps } from './types';
import ContestPageActions from '@pages/Contest/actions';
import { selectMyParticipant } from '@pages/Contest/selector';
import constants from '@constants';
import './ParticipantPending.scss';

const ParticipantPending: React.FunctionComponent<ParticipantPendingProps> = () => {
    const dispatch = useDispatch();
    const { uuid } = useSelector(selectMyParticipant);
    const handleAcceptClick = () => {
        dispatch(
            ContestPageActions.updateContestParticipantStatus(
                uuid,
                constants.STATUS.ACTIVE.KEY
            )
        );
    };

    const handleDeclineClick = () => {
        dispatch(
            ContestPageActions.updateContestParticipantStatus(
                uuid,
                constants.STATUS.INACTIVE.KEY
            )
        );
    };

    return (
        <div className="participant-pending">
            Please respond to the contest invitation below
            <div className="participant-pending-buttons">
                <div className="participant-pending-buttons-button active">
                    <Button block type="primary" onClick={handleAcceptClick}>
                        Accept
                    </Button>
                </div>
                <div className="participant-pending-buttons-button decline">
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

export default ParticipantPending;
