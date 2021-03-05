import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import routes from '@constants/routes';
import { selectContest, selectMembersHash } from '@pages/Contest/selector';
import { ContestParticipantsTableParticipantProps } from './types';
import { prepareParticipant } from '@pages/Contest/utils';
import { mapStatusColour, navigate, withAppRoute } from '@utils';
import './ContestLeaderboardTableParticipant.less';
import constants from '@constants';
import { Tag } from 'antd';

const ContestLeaderboardTableParticipant: React.FunctionComponent<ContestParticipantsTableParticipantProps> = ({
    uuid,
}) => {
    const history = useHistory();
    const params = useParams();
    const { name, s3_filename, member, tags } = prepareParticipant(
        uuid,
        useSelector(selectContest),
        useSelector(selectMembersHash)
    );

    return (
        <div
            className="contest-leaderboard-table-participant"
            onClick={() =>
                navigate(
                    history,
                    withAppRoute(routes.ROUTES.MEMBER.ROUTE, {
                        routeProps: { ...params, member_uuid: uuid },
                    }),
                    member
                )
            }
        >
            {/*<Avatar*/}
            {/*    src={s3_filename && withS3URL(s3_filename)}*/}
            {/*    name={name}*/}
            {/*    size={36}*/}
            {/*    className="contest-participants-table-participant-avatar"*/}
            {/*/>*/}
            <div className="contest-participants-table-participant-name">
                {name}
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
