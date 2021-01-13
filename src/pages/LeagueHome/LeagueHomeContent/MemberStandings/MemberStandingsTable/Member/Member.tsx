import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { MemberProps } from './types';
import './Member.less';

const Member: React.FunctionComponent<MemberProps> = ({ name }) => {
    const history = useHistory();
    const params = useParams();

    return (
        <div
            className="member"
            // onClick={() =>
            //     history.push(
            //         withAppRoute(routes.ROUTES.MEMBER.ROUTE, {
            //             routeProps: { ...params, member_uuid: uuid },
            //         }),
            //         member
            //     )
            // }
        >
            <div className="member-name">{name}</div>
        </div>
    );
};

export default React.memo(Member);
