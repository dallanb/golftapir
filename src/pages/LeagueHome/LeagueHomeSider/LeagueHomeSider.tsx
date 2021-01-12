import React from 'react';
import { ContentLayoutSider } from '@layouts';
import LeagueHomeSiderHeader from './LeagueHomeSiderHeader';
import LeagueHomeSiderContent from './LeagueHomeSiderContent';
import { LeagueHomeSiderProps } from './types';

const LeagueHomeSider: React.FunctionComponent<LeagueHomeSiderProps> = () => {
    return (
        <ContentLayoutSider
            header={<LeagueHomeSiderHeader />}
            content={<LeagueHomeSiderContent />}
        />
    );
};

export default LeagueHomeSider;
