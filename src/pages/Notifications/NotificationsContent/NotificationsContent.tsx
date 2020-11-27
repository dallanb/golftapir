import React from 'react';
import { ContentLayoutContent } from '@layouts';
import Notifications from './Notifications';
import { NotificationsContentProps } from './types';

const NotificationsContent: React.FunctionComponent<NotificationsContentProps> = ({}) => {
    return (
        <ContentLayoutContent>
            <Notifications />
        </ContentLayoutContent>
    );
};

export default NotificationsContent;
