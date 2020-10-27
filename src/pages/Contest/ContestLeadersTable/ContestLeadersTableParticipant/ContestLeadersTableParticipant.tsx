import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import constants from '@constants';
import { selectAccountsHash } from '@pages/Contest/selector';
import { ContestParticipantsTableParticipantProps } from './types';
import './ContestLeadersTableParticipant.scss';
import { prepareParticipant } from '@pages/Contest/utils';

const ContestLeadersTableParticipant: React.FunctionComponent<ContestParticipantsTableParticipantProps> = ({
    uuid,
}) => {
    const history = useHistory();
    const { name } = prepareParticipant(uuid, useSelector(selectAccountsHash));
    return (
        <div
            className="contest-leaders-table-participant-participant"
            onClick={() =>
                history.push(`/app${constants.ROUTES.COMPETITOR}`, {
                    uuid,
                })
            }
        >
            <div className="contest-participants-table-participant-name">
                {name}
            </div>
        </div>
    );
};

export default ContestLeadersTableParticipant;
