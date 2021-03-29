import React from 'react';
import SiderLayoutContent from '@layouts/SiderLayout/SiderLayoutContent';
import { MemberSiderProps } from './types';
import MemberActions from './MemberActions';

const MemberSider: React.FunctionComponent<MemberSiderProps> = ({}) => {
    return (
        <SiderLayoutContent>
            <MemberActions />
        </SiderLayoutContent>
    );
};

export default MemberSider;
