import React from 'react';
import routes from '@constants/routes';
import { Avatar } from '@components';

export default [
    {
        path: routes.LEAGUE_APP.LEAGUE.ROUTE,
        name: (leagueName: string) => leagueName,
        icon: (props: any) => <Avatar {...props.value} />,
        key: routes.LEAGUE_APP.LEAGUE.KEY,
    },
];
