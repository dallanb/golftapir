import React from 'react';
import { HomeSiderHeaderProps } from './types';
import { UserTile } from '@apps/MemberApp/components';

const HomeSiderHeader: React.FunctionComponent<HomeSiderHeaderProps> = () => {
    return <UserTile />;
};

export default HomeSiderHeader;
