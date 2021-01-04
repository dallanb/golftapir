import React from 'react';
import { AccountHeaderProps } from './types';
import { ContentLayoutHeader } from '@layouts';
import CONSTANTS from '@locale/en-CA';
import { Breadcrumb } from '@components';
import constantRoutes from '@constants/routes';

const AccountHeader: React.FunctionComponent<AccountHeaderProps> = () => {
    const title = CONSTANTS.PAGES.ACCOUNT.TITLE;
    const subTitle = CONSTANTS.PAGES.ACCOUNT.DESCRIPTION;
    const extra = <Breadcrumb route={constantRoutes.ROUTES.ACCOUNT.ROUTE} />;
    return (
        <ContentLayoutHeader title={title} subTitle={subTitle} extra={extra} />
    );
};

export default AccountHeader;
