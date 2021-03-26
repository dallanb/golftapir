import React from 'react';
import AppLayoutSider from '@layouts/AppLayout/AppLayoutSider';
import AccountSiderContent from './AccountSiderContent';
import { AccountSiderProps } from './types';

const AccountSider: React.FunctionComponent<AccountSiderProps> = () => {
    return <AppLayoutSider content={<AccountSiderContent />} />;
};

export default AccountSider;
