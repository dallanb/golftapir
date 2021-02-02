import React from 'react';
import { LeagueAppLayoutSiderProps } from './types';
import { SiderLayout } from '@layouts';
import { UserTile, Wallet } from '@apps/components';
import './LeagueAppLayoutSider.less';

const LeagueAppLayoutSider: React.FunctionComponent<LeagueAppLayoutSiderProps> = ({
    content,
}) => {
    const header = (
        <>
            <UserTile />
            <Wallet />
        </>
    );
    return <SiderLayout header={header} content={content} />;
};

export default LeagueAppLayoutSider;
