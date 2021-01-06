import React from 'react';
import { LeagueMemberSettingsHeaderProps } from './types';
import { ContentLayoutHeader } from '@layouts';
import CONSTANTS from '@locale/en-CA';
import { Breadcrumb } from '@components';
import constantRoutes from '@constants/routes';

const LeagueMemberSettingsHeader: React.FunctionComponent<LeagueMemberSettingsHeaderProps> = () => {
    const title = CONSTANTS.PAGES.LEAGUE_MEMBER_SETTINGS.TITLE;
    const subTitle = CONSTANTS.PAGES.LEAGUE_MEMBER_SETTINGS.DESCRIPTION;
    const extra = (
        <Breadcrumb
            route={constantRoutes.ROUTES.LEAGUE_MEMBER_SETTINGS.ROUTE}
        />
    );
    return (
        <ContentLayoutHeader title={title} subTitle={subTitle} extra={extra} />
    );
};

export default LeagueMemberSettingsHeader;
