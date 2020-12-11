import React from 'react';
import { ContentLayoutSider } from '@layouts';
import { NotificationsSiderProps } from './types';
import NotificationsSiderHeader from './NotificationsSiderHeader';
import NotificationsSiderContent from './NotificationsSiderContent';
import './NotificationsSider.less';

const NotificationsSider: React.FunctionComponent<NotificationsSiderProps> = () => {
    return (
        <ContentLayoutSider
            header={<NotificationsSiderHeader />}
            content={<NotificationsSiderContent />}
        />
    );
};

export default NotificationsSider;
