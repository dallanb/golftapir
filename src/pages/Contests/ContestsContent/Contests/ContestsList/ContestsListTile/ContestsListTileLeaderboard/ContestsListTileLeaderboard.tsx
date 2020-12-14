import React from 'react';
import { ContestsListTileLeaderboardProps } from './types';
import constants from '@constants';
import { findLowestScoringParticipant } from '@pages/Contests/utils';
import './ContestsListTileLeaderboard.less';

const ContestsListTileLeaderboard: React.FunctionComponent<ContestsListTileLeaderboardProps> = ({
    status,
    participants,
}) => {
    if (status !== constants.STATUS.PENDING.KEY) {
        const participant = findLowestScoringParticipant(participants);
        if (participant) {
            if (status !== constants.STATUS.COMPLETED.KEY) {
                const participantName = `${participant.first_name} ${participant.last_name}`;
                return <div>Current Leader: {participantName}</div>;
            } else {
                const participantName = `${participant.first_name} ${participant.last_name}`;
                return <div>Winner: {participantName}</div>;
            }
        }
    }
    return null;
};

export default ContestsListTileLeaderboard;
