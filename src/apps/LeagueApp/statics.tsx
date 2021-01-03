import React from 'react';
import routes from '@constants/routes';
import { Avatar } from '@components';
import { withDynamicRoute } from '@utils';

export default [
    {
        path: (props: any) =>
            withDynamicRoute(routes.LEAGUE_APP.LEAGUE.ROUTE, props),
        name: (leagueName: string) => leagueName,
        icon: (props: any) => <Avatar {...props.value} />,
        key: routes.LEAGUE_APP.LEAGUE.KEY,
    },
    {
        path: (props: any) =>
            withDynamicRoute(routes.LEAGUE_APP.LEAGUE_MEMBERS.ROUTE, props),
        name: routes.LEAGUE_APP.LEAGUE_MEMBERS.LABEL,
        icon: routes.LEAGUE_APP.LEAGUE_MEMBERS.ICON,
        key: routes.LEAGUE_APP.LEAGUE_MEMBERS.KEY,
    },
];
