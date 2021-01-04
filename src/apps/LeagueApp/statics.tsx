import React from 'react';
import routes from '@constants/routes';
import { Avatar } from '@components';
import { withAppRoute } from '@utils';
import constants from '@constants';

export default [
    {
        path: (props: any) =>
            withAppRoute(routes.HOME.ROUTE, {
                app: constants.APPS.LEAGUE_APP,
                routeProps: props,
            }),
        name: (leagueName: string) => leagueName,
        icon: (props: any) => <Avatar {...props.value} />,
        key: routes.HOME.KEY,
    },
    {
        path: (props: any) =>
            withAppRoute(routes.MEMBERS.ROUTE, {
                app: constants.APPS.LEAGUE_APP,
                routeProps: props,
            }),
        name: routes.MEMBERS.LABEL,
        icon: routes.MEMBERS.ICON,
        key: routes.MEMBERS.KEY,
    },
    {
        path: (props: any) =>
            withAppRoute(routes.CONTESTS.ROUTE, {
                app: constants.APPS.LEAGUE_APP,
                routeProps: props,
            }),
        name: routes.CONTESTS.LABEL,
        icon: routes.CONTESTS.ICON,
        key: routes.CONTESTS.KEY,
    },
];
