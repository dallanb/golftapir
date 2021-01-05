import React from 'react';
import { CompetitorsHeaderProps } from './types';
import { ContentLayoutHeader } from '@layouts';
import { Breadcrumb } from '@components';
import CONSTANTS from '@locale/en-CA';
import constantRoutes from '@constants/routes';
import './CompetitorsHeader.less';

const ContestsHeader: React.FunctionComponent<CompetitorsHeaderProps> = () => {
    const title = CONSTANTS.PAGES.COMPETITORS.TITLE;
    const subTitle = CONSTANTS.PAGES.COMPETITORS.DESCRIPTION;
    const extra = (
        <Breadcrumb route={constantRoutes.ROUTES.COMPETITORS.ROUTE} />
    );

    return (
        <ContentLayoutHeader title={title} subTitle={subTitle} extra={extra} />
    );
};

export default ContestsHeader;
