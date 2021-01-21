import React from 'react';
import { MembersCreateHeaderProps } from './types';
import { ContentLayoutHeader } from '@layouts';
import CONSTANTS from '@locale/en-CA';
import { Breadcrumb } from '@components';
import constantRoutes from '@constants/routes';

const MembersCreateHeader: React.FunctionComponent<MembersCreateHeaderProps> = () => {
    const title = CONSTANTS.PAGES.MEMBERS_CREATE.TITLE;
    const subTitle = CONSTANTS.PAGES.MEMBERS_CREATE.DESCRIPTION;
    const extra = (
        <Breadcrumb route={constantRoutes.ROUTES.MEMBERS_CREATE.ROUTE} />
    );
    return (
        <ContentLayoutHeader title={title} subTitle={subTitle} extra={extra} />
    );
};

export default MembersCreateHeader;
