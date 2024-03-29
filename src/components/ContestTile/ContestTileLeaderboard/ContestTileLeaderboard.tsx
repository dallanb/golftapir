import React from 'react';
import { ContestTileLeaderboardProps } from './types';
import constants from '@constants';
import { findLowestScoringParticipant } from '@pages/Contests/utils';
import './ContestTileLeaderboard.less';
import { withS3URL } from '@utils';
import { Avatar } from '@components';
import { CrownTwoTone } from '@ant-design/icons/lib';

const ContestTileLeaderboard: React.FunctionComponent<ContestTileLeaderboardProps> = ({
    status,
    participants,
}) => {
    if (status !== constants.STATUS.PENDING.KEY) {
        const participant = findLowestScoringParticipant(participants);
        if (participant) {
            const participantAvatar = withS3URL(
                `${participant.member_uuid}.jpeg`,
                constants.S3_FOLDERS.MEMBER.AVATAR
            );
            const participantName = participant.display_name;
            const participantScore = participant.score;
            if (status !== constants.STATUS.COMPLETED.KEY) {
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
                                    border
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
                return (
                    <div className="leaderboard-completed">
                        <div className="leaderboard-completed-label">
                            WINNER
                        </div>
                        <div className="leaderboard-completed-content">
                            <div className="leaderboard-completed-content-avatar">
                                <Avatar
                                    src={participantAvatar}
                                    name={participantName}
                                    size={36}
                                    shape="square"
                                    border
                                />
                            </div>
                            <div className="leaderboard-completed-content-stack">
                                <div className="leaderboard-completed-content-name">
                                    {participantName} <CrownTwoTone />
                                </div>
                                <div className="leaderboard-completed-content-score">
                                    {participantScore}
                                </div>
                            </div>
                        </div>
                    </div>
                );
            }
        }
    }
    return null;
};

export default ContestTileLeaderboard;
