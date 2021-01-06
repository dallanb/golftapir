import React from 'react';
import { ContentLayoutSider } from '@layouts';
import { MembersSiderProps } from './types';
import MembersSiderHeader from './MembersSiderHeader';
import MembersSiderContent from './MembersSiderContent';
import './MembersSider.less';

const MembersSider: React.FunctionComponent<MembersSiderProps> = () => {
    return (
        <ContentLayoutSider
            header={<MembersSiderHeader />}
            content={<MembersSiderContent />}
        />
    );
};

export default MembersSider;
