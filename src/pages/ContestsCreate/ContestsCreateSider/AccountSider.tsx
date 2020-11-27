import React from 'react';
import { ContentLayoutSider } from '@layouts';
import AccountSiderHeader from './AccountSiderHeader';
import AccountSiderContent from './AccountSiderContent';
import { AccountSiderProps } from './types';

const AccountSider: React.FunctionComponent<AccountSiderProps> = () => {
    return (
        <ContentLayoutSider
            header={<AccountSiderHeader />}
            content={<AccountSiderContent />}
        />
    );
};

export default AccountSider;
