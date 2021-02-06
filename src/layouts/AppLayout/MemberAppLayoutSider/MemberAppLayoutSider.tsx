import React from 'react';
import { MemberAppLayoutSiderProps } from './types';
import { SiderLayout } from '@layouts';
import { UserTile } from '@apps/components';
import './MemberAppLayoutSider.less';

const MemberAppLayoutSider: React.FunctionComponent<MemberAppLayoutSiderProps> = ({
    content,
}) => {
    const siderContent = (
        <>
            <div className="content-header">
                <UserTile />
            </div>
            <div className="content-body">{content}</div>
        </>
    );
    return <SiderLayout content={siderContent} className="app-sider-layout" />;
};

export default MemberAppLayoutSider;
