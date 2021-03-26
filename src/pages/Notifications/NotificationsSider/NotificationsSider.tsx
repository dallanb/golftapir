import React from 'react';
import AppLayoutSider from '@layouts/AppLayout/AppLayoutSider';
import { NotificationsSiderProps } from './types';
import NotificationsSiderContent from './NotificationsSiderContent';
import './NotificationsSider.less';

const NotificationsSider: React.FunctionComponent<NotificationsSiderProps> = () => {
    return <AppLayoutSider content={<NotificationsSiderContent />} />;
};

export default NotificationsSider;
