import React from 'react';
import { keyBy as _keyBy } from 'lodash';
import { ContestsListTileLeaderboardProps } from './types';
import './ContestsListTileLeaderboard.scss';
import constants from '@constants';

const ContestsListTileLeaderboard: React.FunctionComponent<ContestsListTileLeaderboardProps> = ({
    status,
    participants,
}) => {
    if (
        status !== constants.STATUS.PENDING.KEY &&
        status !== constants.STATUS.COMPLETED.KEY
    ) {
        const participantsHash = _keyBy(participants, 'score');
        const participantKeys = Object.keys(participantsHash).reduce(
            (accum: number[], key: string) => {
                const val = parseInt(key);
                if (!isNaN(val)) {
                    accum.push(val);
                }
                return accum;
            },
            []
        );
        const lowestParticipant = Math.min(...participantKeys);
        const participant = participantsHash[lowestParticipant];
        if (participant) {
            const participantName = `${participant.first_name} ${participant.last_name}`;
            return <div>Current Leader: {participantName}</div>;
        }
    }
    return null;
};

export default ContestsListTileLeaderboard;
