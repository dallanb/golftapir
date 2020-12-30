import React from 'react';
import { ContentLayoutSider } from '@layouts';
import LeaguesCreateSiderHeader from './LeaguesCreateSiderHeader';
import LeaguesCreateSiderContent from './LeaguesCreateSiderContent';
import { LeaguesCreateSiderProps } from './types';

const LeaguesCreateSider: React.FunctionComponent<LeaguesCreateSiderProps> = () => {
    return (
        <ContentLayoutSider
            header={<LeaguesCreateSiderHeader />}
            content={<LeaguesCreateSiderContent />}
        />
    );
};

export default LeaguesCreateSider;
