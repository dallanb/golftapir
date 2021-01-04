import React from 'react';
import { NotificationsHeaderProps } from './types';
import { ContentLayoutHeader } from '@layouts';
import CONSTANTS from '@locale/en-CA';
import { Breadcrumb } from '@components';
import constantRoutes from '@constants/routes';
import './NotificationsHeader.less';

const NotificationsHeader: React.FunctionComponent<NotificationsHeaderProps> = () => {
    const title = CONSTANTS.PAGES.NOTIFICATIONS.TITLE;
    const subTitle = CONSTANTS.PAGES.NOTIFICATIONS.DESCRIPTION;
    const extra = (
        <Breadcrumb route={constantRoutes.ROUTES.NOTIFICATIONS.ROUTE} />
    );

    return (
        <ContentLayoutHeader title={title} subTitle={subTitle} extra={extra} />
    );
};

export default NotificationsHeader;
