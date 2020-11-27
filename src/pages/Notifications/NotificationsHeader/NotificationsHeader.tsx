import React from 'react';
import { NotificationsHeaderProps } from './types';
import { ContentLayoutHeader } from '@layouts';
import CONSTANTS from '@locale/en-CA';
import './NotificationsHeader.scss';

const NotificationsHeader: React.FunctionComponent<NotificationsHeaderProps> = () => {
    const title = CONSTANTS.PAGES.NOTIFICATIONS.TITLE;
    const subTitle = CONSTANTS.PAGES.NOTIFICATIONS.DESCRIPTION;

    return <ContentLayoutHeader title={title} subTitle={subTitle} />;
};

export default NotificationsHeader;
