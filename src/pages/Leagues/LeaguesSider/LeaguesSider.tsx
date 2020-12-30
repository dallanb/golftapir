import React from 'react';
import { ContentLayoutSider } from '@layouts';
import { LeaguesSiderProps } from './types';
import LeaguesSiderHeader from './LeaguesSiderHeader';
import LeaguesSiderContent from './LeaguesSiderContent';
import './LeaguesSider.less';

const LeaguesSider: React.FunctionComponent<LeaguesSiderProps> = () => {
    return (
        <ContentLayoutSider
            header={<LeaguesSiderHeader />}
            content={<LeaguesSiderContent />}
        />
    );
};

export default LeaguesSider;
