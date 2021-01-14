import React from 'react';
import { useSelector } from 'react-redux';
import SiderLayoutContent from '@layouts/SiderLayout/SiderLayoutContent';
import { MemberSiderContentProps } from './types';
import { selectData } from '@pages/Member/selector';
import MemberActions from './MemberActions';

const MemberSiderContent: React.FunctionComponent<MemberSiderContentProps> = ({}) => {
    const { isInitialized } = useSelector(selectData);

    return (
        <SiderLayoutContent showSpinner={!isInitialized}>
            <MemberActions />
        </SiderLayoutContent>
    );
};

export default MemberSiderContent;
