import React from 'react';
import SiderLayoutContent from '@layouts/SiderLayout/SiderLayoutContent';
import { MemberSiderContentProps } from './types';
import { useSelector } from 'react-redux';
import { selectData } from '@pages/Member/selector';

const MemberSiderContent: React.FunctionComponent<MemberSiderContentProps> = ({}) => {
    const { isInitialized } = useSelector(selectData);

    return (
        <SiderLayoutContent showSpinner={!isInitialized}>
            <div />
        </SiderLayoutContent>
    );
};

export default MemberSiderContent;
