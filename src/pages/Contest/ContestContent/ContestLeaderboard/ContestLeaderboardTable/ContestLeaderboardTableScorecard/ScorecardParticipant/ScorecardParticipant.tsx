import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { get as _get } from 'lodash';
import { Button } from 'antd';
import { ScorecardParticipantProps } from './types';
import { Avatar } from '@components';
import { selectLeagueMembersDataHashByMember } from '@selectors/AppSelector';
import { getName, navigate, withAppRoute, withS3URL } from '@utils';
import routes from '@constants/routes';
import './ScorecardParticipant.less';
import { selectMyLeagueUUID } from '@selectors/BaseSelector';
import CONSTANTS from '@locale/en-CA';

const ScorecardParticipant: React.FunctionComponent<ScorecardParticipantProps> = ({
    user,
}) => {
    const history = useHistory();
    const leagueUUID = useSelector(selectMyLeagueUUID);
    const membersHash = useSelector(selectLeagueMembersDataHashByMember);
    const member = _get(membersHash, [user], null);
    const avatar = _get(member, ['avatar'], null);
    const memberUUID = _get(member, ['uuid'], null);
    const name = getName(member, '');
    return (
        <div className="scorecard-participant">
            <div className="scorecard-participant-user">
                <div className="scorecard-participant-user-avatar">
                    <Avatar
                        src={avatar && withS3URL(avatar)}
                        name={name}
                        size={84}
                    />
                </div>
                <div className="scorecard-participant-user-name">{name}</div>
            </div>
            <div className="scorecard-participant-buttons">
                <div className="scorecard-participant-button message">
                    <Button
                        block
                        disabled
                        size={'small'}
                        type="primary"
                        key="message"
                    >
                        {CONSTANTS.COMMON.MESSAGE}
                    </Button>
                </div>
                <div className="scorecard-participant-button profile">
                    <Button
                        block
                        size={'small'}
                        type="primary"
                        key="profile"
                        onClick={() =>
                            // TODO: competitor or league member?
                            navigate(
                                history,
                                withAppRoute(routes.ROUTES.MEMBER.ROUTE, {
                                    routeProps: {
                                        league_uuid: leagueUUID,
                                        member_uuid: memberUUID,
                                    },
                                }),
                                {
                                    ...member,
                                }
                            )
                        }
                    >
                        {CONSTANTS.COMMON.PROFILE}
                    </Button>
                </div>
            </div>
        </div>
    );
};
export default ScorecardParticipant;
