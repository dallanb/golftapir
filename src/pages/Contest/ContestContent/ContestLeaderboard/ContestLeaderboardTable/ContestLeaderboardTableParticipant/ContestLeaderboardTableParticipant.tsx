import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import routes from '@constants/routes';
import { selectMembersHash } from '@pages/Contest/selector';
import { ContestParticipantsTableParticipantProps } from './types';
import { prepareParticipant } from '@pages/Contest/utils';
import { Avatar } from '@components';
import { withDynamicRoute, withS3URL } from '@utils';
import './ContestLeaderboardTableParticipant.less';

const ContestLeaderboardTableParticipant: React.FunctionComponent<ContestParticipantsTableParticipantProps> = ({
    uuid,
}) => {
    const history = useHistory();
    const { name, s3_filename, member } = prepareParticipant(
        uuid,
        useSelector(selectMembersHash)
    );

    return (
        <div
            className="contest-leaderboard-table-participant"
            onClick={() =>
                history.push(
                    withDynamicRoute(routes.MEMBER_APP.COMPETITOR.ROUTE, {
                        uuid,
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
        </div>
    );
};

export default React.memo(ContestLeaderboardTableParticipant);
