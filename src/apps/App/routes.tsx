import { AuthApp, LeagueApp, MemberApp } from '@apps';
import React from 'react';

export const routes: any = [
    {
        path: '/auth',
        render: ({ match: { url } }: any) => <AuthApp url={url} />,
    },
    {
        path: '/app',
        render: ({ match: { url } }: any) => <MemberApp url={url} />,
    },
    {
        path: '/league',
        render: ({ match: { url } }: any) => <LeagueApp url={url} />,
    },
];
