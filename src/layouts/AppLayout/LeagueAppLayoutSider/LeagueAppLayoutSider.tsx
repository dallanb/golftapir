import React from 'react';
import { LeagueAppLayoutSiderProps } from './types';
import { SiderLayout } from '@layouts';
import { UserTile, Wallet } from '@apps/components';
import './LeagueAppLayoutSider.less';

const LeagueAppLayoutSider: React.FunctionComponent<LeagueAppLayoutSiderProps> = ({
    content,
}) => {
    const siderContent = (
        <>
            <div className="content-header">
                <UserTile />
                <Wallet />
            </div>
            <div className="content-body">{content}</div>
        </>
    );
    return <SiderLayout content={siderContent} className="app-sider-layout" />;
};

export default LeagueAppLayoutSider;
