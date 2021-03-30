import { AuthApp, LeagueApp, MemberApp } from '@apps';
import React from 'react';
import constantRoutes from '@constants/routes';

export const routes: any = [
    {
        path: constantRoutes.APPS.AUTH_APP.ROUTE,
        render: (props: any) => <AuthApp {...props} />,
    },
    {
        path: constantRoutes.APPS.MEMBER_APP.ROUTE,
        render: (props: any) => <MemberApp {...props} />,
    },
    {
        path: constantRoutes.APPS.LEAGUE_APP.ROUTE,
        render: (props: any) => <LeagueApp {...props} />,
    },
];
