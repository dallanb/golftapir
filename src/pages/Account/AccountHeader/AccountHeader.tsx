import React from 'react';
import { AccountHeaderProps } from './types';
import { ContentLayoutHeader } from '@layouts';
import CONSTANTS from '@locale/en-CA';

const AccountHeader: React.FunctionComponent<AccountHeaderProps> = () => {
    const title = CONSTANTS.PAGES.ACCOUNT.TITLE;
    const subTitle = CONSTANTS.PAGES.ACCOUNT.DESCRIPTION;
    return <ContentLayoutHeader title={title} subTitle={subTitle} />;
};

export default AccountHeader;
