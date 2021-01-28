import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'antd';
import { ParticipantPendingProps } from './types';
import ContestPageActions from '@pages/Contest/actions';
import { selectMyParticipant } from '@pages/Contest/selector';
import constants from '@constants';
import ComponentContent from '@layouts/ComponentContent';
import './ParticipantPending.less';

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
        <ComponentContent
            className="participant-pending space"
            bodyClassName={'participant-pending-body'}
            title={'Actions'}
        >
            <div className="participant-pending-buttons">
                <div className="participant-pending-buttons-button active">
                    <Button block type="primary" onClick={handleAcceptClick}>
                        Accept Contest Invite
                    </Button>
                </div>
                <div className="participant-pending-buttons-button decline">
                    <Button
                        block
                        danger
                        type="primary"
                        onClick={handleDeclineClick}
                    >
                        Decline Contest Invite
                    </Button>
                </div>
            </div>
        </ComponentContent>
    );
};

export default ParticipantPending;
