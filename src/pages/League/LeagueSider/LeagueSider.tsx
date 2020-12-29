import React from 'react';
import { ContentLayoutSider } from '@layouts';
import LeagueSiderHeader from './LeagueSiderHeader';
import LeagueSiderContent from './LeagueSiderContent';
import { LeagueSiderProps } from './types';

const LeagueSider: React.FunctionComponent<LeagueSiderProps> = () => {
    return (
        <ContentLayoutSider
            header={<LeagueSiderHeader />}
            content={<LeagueSiderContent />}
        />
    );
};

export default LeagueSider;
