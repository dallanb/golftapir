import React from 'react';
import { useHistory } from 'react-router-dom';
import { Avatar } from '@components';
import { withS3URL } from '@utils';
import constants from '@constants';
import { ContestMatchupScorecardParticipantProps } from './types';
import './ContestMatchupScorecardParticipant.scss';

const ContestMatchupScorecardParticipant: React.FunctionComponent<ContestMatchupScorecardParticipantProps> = ({
    s3_filename,
    first_name,
    last_name,
    uuid,
}) => {
    const history = useHistory();
    return (
        <div
            className="contest-matchup-scorecard-participant"
            onClick={() =>
                history.push(`/app${constants.ROUTES.COMPETITOR}`, {
                    uuid,
                })
            }
        >
            <Avatar
                src={s3_filename && withS3URL(s3_filename)}
                name={`${first_name} ${last_name}`}
                className="contest-matchup-scorecard-participant-avatar"
            />
            <div className="contest-matchup-scorecard-participant-name">{`${first_name} ${last_name}`}</div>
        </div>
    );
};

export default ContestMatchupScorecardParticipant;
