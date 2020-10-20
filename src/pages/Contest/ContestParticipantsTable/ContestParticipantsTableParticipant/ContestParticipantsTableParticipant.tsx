import React from 'react';
import { useHistory } from 'react-router-dom';
import { Avatar } from '@components';
import { withS3URL } from '@utils';
import { ContestParticipantsTableParticipantProps } from './types';
import './ContestParticipantsTableParticipant.scss';
import constants from '@constants';

const ContestParticipantsTableParticipant: React.FunctionComponent<ContestParticipantsTableParticipantProps> = ({
    s3_filename,
    first_name,
    last_name,
    uuid,
}) => {
    const history = useHistory();
    return (
        <div
            className="contest-participants-table-participant"
            onClick={() =>
                history.push(`/app${constants.ROUTES.COMPETITOR}`, {
                    competitor_uuid: uuid,
                })
            }
        >
            <Avatar
                src={s3_filename && withS3URL(s3_filename)}
                name={`${first_name} ${last_name}`}
                className="contest-participants-table-participant-avatar"
            />
            <div className="contest-participants-table-participant-name">{`${first_name} ${last_name}`}</div>
        </div>
    );
};

export default ContestParticipantsTableParticipant;
