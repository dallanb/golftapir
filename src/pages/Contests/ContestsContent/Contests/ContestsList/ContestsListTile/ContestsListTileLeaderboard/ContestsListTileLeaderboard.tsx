import React from 'react';
import { ContestsListTileLeaderboardProps } from './types';
import constants from '@constants';
import { findLowestScoringParticipant } from '@pages/Contests/utils';
import './ContestsListTileLeaderboard.less';
import { withS3URL } from '@utils';
import { Avatar } from '@components';

const ContestsListTileLeaderboard: React.FunctionComponent<ContestsListTileLeaderboardProps> = ({
    status,
    participants,
}) => {
    if (status !== constants.STATUS.PENDING.KEY) {
        const participant = findLowestScoringParticipant(participants);
        if (participant) {
            if (status !== constants.STATUS.COMPLETED.KEY) {
                const participantAvatar = withS3URL(
                    `${participant.member_uuid}.jpeg`,
                    constants.S3_FOLDERS.MEMBER.AVATAR
                );
                const participantName = participant.display_name;
                const participantScore = participant.score;
                return (
                    <div className="leaderboard-active">
                        <div className="leaderboard-active-label">LEADER</div>
                        <div className="leaderboard-active-content">
                            <div className="leaderboard-active-content-avatar">
                                <Avatar
                                    src={participantAvatar}
                                    name={participantName}
                                    size={36}
                                    shape="square"
                                />
                            </div>
                            <div className="leaderboard-active-content-stack">
                                <div className="leaderboard-active-content-name">
                                    {participantName}
                                </div>
                                <div className="leaderboard-active-content-score">
                                    {participantScore}
                                </div>
                            </div>
                        </div>
                    </div>
                );
            } else {
                const participantName = participant.display_name;
                return (
                    <div className="leaderboard-completed">
                        <div className="leaderboard-completed-label">
                            WINNER
                        </div>
                        <div className="leaderboard-completed-content">
                            {participantName}
                        </div>
                    </div>
                );
            }
        }
    }
    return null;
};

export default ContestsListTileLeaderboard;
