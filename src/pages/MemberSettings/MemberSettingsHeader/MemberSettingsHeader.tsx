import React from 'react';
import { MemberSettingsHeaderProps } from './types';
import { ContentLayoutHeader } from '@layouts';
import CONSTANTS from '@locale/en-CA';
import { Breadcrumb } from '@components';
import constantRoutes from '@constants/routes';

const MemberSettingsHeader: React.FunctionComponent<MemberSettingsHeaderProps> = () => {
    const title = CONSTANTS.PAGES.MEMBER_SETTINGS.TITLE;
    const subTitle = CONSTANTS.PAGES.MEMBER_SETTINGS.DESCRIPTION;
    const extra = (
        <Breadcrumb route={constantRoutes.ROUTES.MEMBER_SETTINGS.ROUTE} />
    );
    return (
        <ContentLayoutHeader title={title} subTitle={subTitle} extra={extra} />
    );
};

export default MemberSettingsHeader;
