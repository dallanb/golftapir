import React from 'react';
import { ContentLayoutSider } from '@layouts';
import { MemberSiderProps } from './types';
import MemberSiderHeader from './MemberSiderHeader';
import MemberSiderContent from './MemberSiderContent';
import './MemberSider.less';

const MemberSider: React.FunctionComponent<MemberSiderProps> = () => {
    return (
        <ContentLayoutSider
            header={<MemberSiderHeader />}
            content={<MemberSiderContent />}
        />
    );
};

export default MemberSider;
