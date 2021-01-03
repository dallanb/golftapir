import React from 'react';
import { ContentLayoutSider } from '@layouts';
import { LeagueMembersSiderProps } from './types';
import LeagueMembersSiderHeader from './LeagueMembersSiderHeader';
import LeagueMembersSiderContent from './LeagueMembersSiderContent';
import './LeagueMembersSider.less';

const LeagueMembersSider: React.FunctionComponent<LeagueMembersSiderProps> = () => {
    return (
        <ContentLayoutSider
            header={<LeagueMembersSiderHeader />}
            content={<LeagueMembersSiderContent />}
        />
    );
};

export default LeagueMembersSider;
