import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'antd';
import ComponentContent from '@layouts/ComponentContent';
import { ContestButtonsProps } from './types';
import { selectData, selectMyParticipant } from '@pages/Contest/selector';
import ContestPageActions from '@pages/Contest/actions';
import constants from '@constants';
import './ContestButtons.scss';

const ContestButtons: React.FunctionComponent<ContestButtonsProps> = () => {
    const dispatch = useDispatch();
    const { isInitialized } = useSelector(selectData);
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
        <ComponentContent
            showSpinner={!isInitialized}
            className="contest-buttons"
        >
            <div className={`contest-button ${constants.ACTION.APPROVE.KEY}`}>
                <Button
                    block
                    key={constants.ACTION.COMPLETE.KEY}
                    onClick={handleApproveClick}
                >
                    {constants.ACTION.COMPLETE.LABEL}
                </Button>
            </div>
        </ComponentContent>
    );
};

export default ContestButtons;
