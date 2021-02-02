import React from 'react';
import { MemberAppLayoutSiderProps } from './types';
import { SiderLayout } from '@layouts';
import { UserTile } from '@apps/components';
import './MemberAppLayoutSider.less';

const MemberAppLayoutSider: React.FunctionComponent<MemberAppLayoutSiderProps> = ({
    content,
}) => {
    return <SiderLayout header={<UserTile />} content={content} />;
};

export default MemberAppLayoutSider;
