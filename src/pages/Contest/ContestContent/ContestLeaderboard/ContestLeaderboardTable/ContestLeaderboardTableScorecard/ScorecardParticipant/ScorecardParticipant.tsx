import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { get as _get } from 'lodash';
import { Button } from 'antd';
import { ScorecardParticipantProps } from './types';
import { Avatar } from '@components';
import { selectMembersHash } from '@pages/Contest/selector';
import { getName, withAppRoute, withS3URL } from '@utils';
import routes from '@constants/routes';
import './ScorecardParticipant.less';
import { selectMyLeagueUUID } from '@selectors/BaseSelector';

const ScorecardParticipant: React.FunctionComponent<ScorecardParticipantProps> = ({
    user,
}) => {
    const history = useHistory();
    const leagueUUID = useSelector(selectMyLeagueUUID);
    const membersHash = useSelector(selectMembersHash);
    const member = _get(membersHash, [user], null);
    const avatar = _get(member, ['avatar', 's3_filename'], null);
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
                    <Button block size={'small'} type="primary" key="message">
                        Message
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
                            history.push(
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
                        Profile
                    </Button>
                </div>
            </div>
        </div>
    );
};
export default ScorecardParticipant;
