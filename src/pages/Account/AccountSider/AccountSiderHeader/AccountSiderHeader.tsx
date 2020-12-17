import React from 'react';
import { AccountSiderHeaderProps } from './types';
import { UserTile } from '@apps/MemberApp/components';

const AccountSiderHeader: React.FunctionComponent<AccountSiderHeaderProps> = () => {
    return <UserTile />;
};

export default AccountSiderHeader;
