import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { Tag } from 'antd';
import routes from '@constants/routes';
import { selectContest } from '@modules/Contest/selector';
import { selectLeagueMembersDataHashByMember } from '@selectors/AppSelector';
import { ContestParticipantsTableParticipantProps } from './types';
import { prepareParticipant } from '@pages/Contest/utils';
import { mapStatusColour, navigate, withAppRoute } from '@utils';
import './ContestLeaderboardTableParticipant.less';
import { selectMyUUID } from '@selectors/BaseSelector';
import { UserOutlined } from '@ant-design/icons';

const ContestLeaderboardTableParticipant: React.FunctionComponent<ContestParticipantsTableParticipantProps> = ({
    uuid,
}) => {
    const history = useHistory();
    const params = useParams();
    const memberUUID = useSelector(selectMyUUID);
    const {
        name,
        leagueMemberUUID,
        s3_filename,
        member,
        tags,
    } = prepareParticipant(
        uuid,
        useSelector(selectContest),
        useSelector(selectLeagueMembersDataHashByMember)
    );
    const myMember = member.member === memberUUID;

    return (
        <div
            className="contest-leaderboard-table-participant"
            onClick={() =>
                navigate(
                    history,
                    withAppRoute(routes.ROUTES.MEMBER.ROUTE, {
                        routeProps: {
                            ...params,
                            member_uuid: leagueMemberUUID,
                        },
                    }),
                    member
                )
            }
        >
            <div className="contest-participants-table-participant-name">
                {name}
                {myMember && (
                    <UserOutlined className="contest-participants-table-participant-name-user" />
                )}
            </div>
            <div className="contest-participants-table-participant-tags">
                {tags.map((tag: string) => (
                    <Tag key={tag} color={mapStatusColour(tag)}>
                        {tag}
                    </Tag>
                ))}
            </div>
        </div>
    );
};

export default React.memo(ContestLeaderboardTableParticipant);
