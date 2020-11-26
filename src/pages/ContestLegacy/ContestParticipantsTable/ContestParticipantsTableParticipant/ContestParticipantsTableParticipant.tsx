import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Avatar } from '@components';
import { withS3URL } from '@utils';
import { ContestParticipantsTableParticipantProps } from './types';
import constants from '@constants';
import { selectAccountsHash } from '@pages/Contest/selector';
import { prepareParticipant } from '@pages/Contest/utils';
import './ContestParticipantsTableParticipant.scss';

const ContestParticipantsTableParticipant: React.FunctionComponent<ContestParticipantsTableParticipantProps> = ({
    uuid,
}) => {
    const history = useHistory();
    const { name, s3_filename } = prepareParticipant(
        uuid,
        useSelector(selectAccountsHash)
    );
    return (
        <div
            className="contest-participants-table-participant"
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

export default ContestParticipantsTableParticipant;
