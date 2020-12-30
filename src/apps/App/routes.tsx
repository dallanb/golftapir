import { AuthApp, LeagueApp, MemberApp } from '@apps';
import React from 'react';

export const routes: any = [
    {
        path: '/auth',
        render: () => <AuthApp />,
    },
    {
        path: '/app',
        render: () => <MemberApp />,
    },
    {
        path: '/league/:uuid',
        render: () => <LeagueApp />,
    },
];
