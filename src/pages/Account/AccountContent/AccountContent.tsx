import React from 'react';
import { ContentLayoutContent } from '@layouts';
import Account from './Account';
import { AccountContentProps } from './types';

const AccountContent: React.FunctionComponent<AccountContentProps> = ({}) => {
    return (
        <ContentLayoutContent>
            <Account />
        </ContentLayoutContent>
    );
};

export default AccountContent;
