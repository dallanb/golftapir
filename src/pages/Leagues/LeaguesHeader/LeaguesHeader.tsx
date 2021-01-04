import React from 'react';
import { LeaguesHeaderProps } from './types';
import { ContentLayoutHeader } from '@layouts';
import { Breadcrumb } from '@components';
import CONSTANTS from '@locale/en-CA';
import constantRoutes from '@constants/routes';
import './LeaguesHeader.less';

const LeaguesHeader: React.FunctionComponent<LeaguesHeaderProps> = () => {
    const title = CONSTANTS.PAGES.LEAGUES.TITLE;
    const subTitle = CONSTANTS.PAGES.LEAGUES.DESCRIPTION;
    const extra = <Breadcrumb route={constantRoutes.ROUTES.LEAGUES.ROUTE} />;
    return (
        <>
            <ContentLayoutHeader
                title={title}
                subTitle={subTitle}
                extra={extra}
            />
        </>
    );
};

export default LeaguesHeader;
