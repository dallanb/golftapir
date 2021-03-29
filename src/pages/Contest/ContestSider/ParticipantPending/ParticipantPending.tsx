import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'antd';
import { ParticipantPendingProps } from './types';
import ContestPageActions from '@pages/Contest/actions';
import {
    selectPayoutBuyIn,
    selectMyParticipant,
} from '@pages/Contest/selector';
import { selectMyWalletBalance } from '@selectors/BaseSelector';
import constants from '@constants';
import { SiderComponentContent } from '@layouts/ComponentContent';
import './ParticipantPending.less';

const ParticipantPending: React.FunctionComponent<ParticipantPendingProps> = () => {
    const dispatch = useDispatch();
    const { uuid } = useSelector(selectMyParticipant);
    const balance = useSelector(selectMyWalletBalance);
    const buyIn = useSelector(selectPayoutBuyIn);

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
        <SiderComponentContent
            className="participant-pending space"
            bodyClassName={'participant-pending-body'}
            title={'Actions'}
        >
            <div className="participant-pending-buttons">
                <div className="participant-pending-buttons-button active">
                    <Button
                        block
                        type="primary"
                        disabled={buyIn > balance}
                        onClick={handleAcceptClick}
                    >
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
        </SiderComponentContent>
    );
};

export default ParticipantPending;
