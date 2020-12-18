import React from 'react';
import { NotificationsHeaderProps } from './types';
import { ContentLayoutHeader } from '@layouts';
import CONSTANTS from '@locale/en-CA';
import { Breadcrumb } from '@apps/MemberApp/components';
import './NotificationsHeader.less';

const NotificationsHeader: React.FunctionComponent<NotificationsHeaderProps> = () => {
    const title = CONSTANTS.PAGES.NOTIFICATIONS.TITLE;
    const subTitle = CONSTANTS.PAGES.NOTIFICATIONS.DESCRIPTION;
    const extra = <Breadcrumb />;

    return (
        <ContentLayoutHeader title={title} subTitle={subTitle} extra={extra} />
    );
};

export default NotificationsHeader;
