import React from 'react';
import { Button } from 'antd';
import { useDispatch } from 'react-redux';
import { ContestParticipantsTableWagerButtonProps } from './types';
import { ContestActions } from '@actions';
import constants from '@constants';
import './ContestParticipantsTableWagerButton.scss';

const ContestParticipantsTableWagerButton: React.FunctionComponent<ContestParticipantsTableWagerButtonProps> = ({
    uuid,
}) => {
    const dispatch = useDispatch();
    return (
        <div className="contest-participants-table-wager-button-response">
            <Button type="primary" onClick={() => {}}>
                WIN
            </Button>
        </div>
    );
};

export default ContestParticipantsTableWagerButton;
