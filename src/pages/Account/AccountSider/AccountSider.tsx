import React from 'react';
import MemberAppLayoutSider from '@layouts/AppLayout/MemberAppLayoutSider';
import AccountSiderContent from './AccountSiderContent';
import { AccountSiderProps } from './types';

const AccountSider: React.FunctionComponent<AccountSiderProps> = () => {
    return <MemberAppLayoutSider content={<AccountSiderContent />} />;
};

export default AccountSider;
