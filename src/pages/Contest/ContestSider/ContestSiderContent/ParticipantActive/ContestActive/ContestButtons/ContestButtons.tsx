import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'antd';
import { ContestButtonsProps } from './types';
import { selectMyParticipant } from '@pages/Contest/selector';
import ContestPageActions from '@pages/Contest/actions';
import constants from '@constants';
import './ContestButtons.scss';

const ContestButtons: React.FunctionComponent<ContestButtonsProps> = () => {
    const dispatch = useDispatch();
    const participant = useSelector(selectMyParticipant);

    const handleApproveClick = () => {
        dispatch(
            ContestPageActions.updateContestParticipantStatus(
                participant.uuid,
                constants.STATUS.COMPLETED.KEY
            )
        );
    };
    return (
        <div className={`contest-button ${constants.ACTION.APPROVE.KEY}`}>
            <Button
                block
                key={constants.ACTION.COMPLETE.KEY}
                onClick={handleApproveClick}
            >
                {constants.ACTION.COMPLETE.LABEL}
            </Button>
        </div>
    );
};

export default ContestButtons;
