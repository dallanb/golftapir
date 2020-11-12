import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import constants from '@constants';
import { selectAccountsHash } from '@pages/Contest/selector';
import { ContestParticipantsTableParticipantProps } from './types';
import './ContestLeadersTableParticipant.scss';
import { prepareParticipant } from '@pages/Contest/utils';
import { Avatar } from '@components';
import { withS3URL } from '@utils';

const ContestLeadersTableParticipant: React.FunctionComponent<ContestParticipantsTableParticipantProps> = ({
    uuid,
}) => {
    const history = useHistory();
    const { name, s3_filename } = prepareParticipant(
        uuid,
        useSelector(selectAccountsHash)
    );
    return (
        <div
            className="contest-leaders-table-participant"
            onClick={() =>
                history.push(`/app${constants.ROUTES.COMPETITOR}`, {
                    uuid,
                })
            }
        >
            <Avatar
                src={s3_filename && withS3URL(s3_filename)}
                name={name}
                className="contest-participants-table-participant-avatar"
            />
            <div className="contest-participants-table-participant-name">
                {name}
            </div>
        </div>
    );
};

export default ContestLeadersTableParticipant;
