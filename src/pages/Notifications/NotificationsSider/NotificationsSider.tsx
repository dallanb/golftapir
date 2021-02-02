import React from 'react';
import MemberAppLayoutSider from '@layouts/AppLayout/MemberAppLayoutSider';
import { NotificationsSiderProps } from './types';
import NotificationsSiderContent from './NotificationsSiderContent';
import './NotificationsSider.less';

const NotificationsSider: React.FunctionComponent<NotificationsSiderProps> = () => {
    return <MemberAppLayoutSider content={<NotificationsSiderContent />} />;
};

export default NotificationsSider;
