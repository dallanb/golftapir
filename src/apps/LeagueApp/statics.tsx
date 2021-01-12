import React from 'react';
import routes from '@constants/routes';
import { Avatar } from '@components';
import { withAppRoute } from '@utils';
import constants from '@constants';

export default [
    {
        path: (props: any) =>
            withAppRoute(routes.ROUTES.LEAGUE_HOME.ROUTE, {
                app: constants.APPS.LEAGUE_APP,
                routeProps: props,
            }),
        name: (leagueName: string) => leagueName,
        icon: (props: any) => <Avatar {...props.value} />,
        key: routes.ROUTES.LEAGUE_HOME.KEY,
    },
    {
        path: (props: any) =>
            withAppRoute(routes.ROUTES.MEMBERS.ROUTE, {
                app: constants.APPS.LEAGUE_APP,
                routeProps: props,
            }),
        name: routes.ROUTES.MEMBERS.LABEL,
        icon: routes.ROUTES.MEMBERS.ICON,
        key: routes.ROUTES.MEMBERS.KEY,
    },
    {
        path: (props: any) => {
            return withAppRoute(routes.ROUTES.CONTESTS.ROUTE, {
                app: constants.APPS.LEAGUE_APP,
                routeProps: props,
            });
        },
        name: routes.ROUTES.CONTESTS.LABEL,
        icon: routes.ROUTES.CONTESTS.ICON,
        key: routes.ROUTES.CONTESTS.KEY,
    },
    {
        path: (props: any) => {
            return withAppRoute(routes.ROUTES.MEMBER_SETTINGS.ROUTE, {
                app: constants.APPS.LEAGUE_APP,
                routeProps: props,
            });
        },
        name: routes.ROUTES.MEMBER_SETTINGS.LABEL,
        icon: routes.ROUTES.MEMBER_SETTINGS.ICON,
        key: routes.ROUTES.MEMBER_SETTINGS.KEY,
    },
];
