import React from 'react';
import { ContestsHeaderProps } from './types';
import { ContentLayoutHeader } from '@layouts';
import { Breadcrumb } from '@components';
import constantRoutes from '@constants/routes';
import CONSTANTS from '@locale/en-CA';
import './ContestsHeader.less';

const ContestsHeader: React.FunctionComponent<ContestsHeaderProps> = () => {
    const title = CONSTANTS.PAGES.CONTESTS.TITLE;
    const subTitle = CONSTANTS.PAGES.CONTESTS.DESCRIPTION;
    const extra = <Breadcrumb route={constantRoutes.ROUTES.CONTESTS.ROUTE} />;
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

export default ContestsHeader;
