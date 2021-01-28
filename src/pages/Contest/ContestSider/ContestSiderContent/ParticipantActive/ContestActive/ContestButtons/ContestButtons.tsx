import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'antd';
import { ContestButtonsProps } from './types';
import { selectMyParticipant } from '@pages/Contest/selector';
import ContestPageActions from '@pages/Contest/actions';
import constants from '@constants';
import ComponentContent from '@layouts/ComponentContent';
import { selectData } from '../selector';
import './ContestButtons.less';

const ContestButtons: React.FunctionComponent<ContestButtonsProps> = () => {
    const dispatch = useDispatch();
    const participant = useSelector(selectMyParticipant);
    const { isInitialized } = useSelector(selectData);

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
            className="contest-buttons space"
            bodyClassName="contest-buttons-body"
            title={'Actions'}
        >
            <Button
                block
                type="primary"
                key={constants.ACTION.COMPLETE.KEY}
                className={`contest-button ${constants.ACTION.APPROVE.KEY}`}
                onClick={handleApproveClick}
            >
                {constants.ACTION.COMPLETE.LABEL}
            </Button>
        </ComponentContent>
    );
};

export default ContestButtons;
