import { Auth, MemberApp } from '@apps';
import React from 'react';

export const routes: any = [
    {
        path: '/auth',
        render: ({ match: { url } }: any) => <Auth url={url} />,
    },
    {
        path: '/app',
        render: ({ match: { url } }: any) => <MemberApp url={url} />,
    },
];
