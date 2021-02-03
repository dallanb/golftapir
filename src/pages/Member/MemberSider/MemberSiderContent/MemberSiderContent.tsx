import React from 'react';
import SiderLayoutContent from '@layouts/SiderLayout/SiderLayoutContent';
import { MemberSiderContentProps } from './types';
import MemberActions from './MemberActions';

const MemberSiderContent: React.FunctionComponent<MemberSiderContentProps> = ({}) => {
    return (
        <SiderLayoutContent>
            <MemberActions />
        </SiderLayoutContent>
    );
};

export default MemberSiderContent;
