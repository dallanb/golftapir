import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import constants from '@constants';
import { ContestParticipantsTableParticipantProps } from './types';
import './ContestLeadersTableParticipant.scss';

const ContestLeadersTableParticipant: React.FunctionComponent<ContestParticipantsTableParticipantProps> = ({
    uuid,
}) => {
    const history = useHistory();
    const { last_name } = useSelector(selectAccountByUUID, uuid);
    return (
        <div
            className="contest-leaders-table-participant-participant"
            onClick={() =>
                history.push(`/app${constants.ROUTES.COMPETITOR}`, {
                    uuid,
                })
            }
        >
            <div className="contest-participants-table-participant-name">{`${last_name}`}</div>
        </div>
    );
};

export default ContestLeadersTableParticipant;
