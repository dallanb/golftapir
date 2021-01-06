import React from 'react';
import { MembersHeaderProps } from './types';
import { ContentLayoutHeader } from '@layouts';
import { Breadcrumb } from '@components';
import CONSTANTS from '@locale/en-CA';
import constantRoutes from '@constants/routes';
import './MembersHeader.less';

const ContestsHeader: React.FunctionComponent<MembersHeaderProps> = () => {
    const title = CONSTANTS.PAGES.MEMBERS.TITLE;
    const subTitle = CONSTANTS.PAGES.MEMBERS.DESCRIPTION;
    const extra = <Breadcrumb route={constantRoutes.ROUTES.MEMBERS.ROUTE} />;

    return (
        <ContentLayoutHeader title={title} subTitle={subTitle} extra={extra} />
    );
};

export default ContestsHeader;
