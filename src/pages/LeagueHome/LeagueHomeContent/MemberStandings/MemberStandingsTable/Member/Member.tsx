import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { get as _get } from 'lodash';
import { MemberProps } from './types';
import { navigate, withAppRoute } from '@utils';
import routes from '@constants/routes';
import { selectLeagueMembersDataHashByMember } from '@selectors/AppSelector';
import './Member.less';

const Member: React.FunctionComponent<MemberProps> = ({ uuid }) => {
    const history = useHistory();
    const params = useParams();
    const membersHash = useSelector(selectLeagueMembersDataHashByMember);
    const member = _get(membersHash, [uuid], {});
    const name = _get(member, ['display_name'], '');
    const leagueMemberUUID = _get(member, ['uuid'], undefined);
    return (
        <div
            className="member"
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
            <div className="member-name">{name}</div>
        </div>
    );
};

export default React.memo(Member);
