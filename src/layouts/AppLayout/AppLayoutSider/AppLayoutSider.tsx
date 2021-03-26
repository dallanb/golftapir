import React from 'react';
import { AppLayoutSiderProps } from './types';
import { SiderLayout } from '@layouts';
import './AppLayoutSider.less';

const AppLayoutSider: React.FunctionComponent<AppLayoutSiderProps> = ({
    content,
}) => {
    const siderContent = <div className="content-body">{content}</div>;
    return <SiderLayout content={siderContent} className="app-sider-layout" />;
};

export default AppLayoutSider;
