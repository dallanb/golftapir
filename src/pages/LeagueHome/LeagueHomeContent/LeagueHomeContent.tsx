import React from 'react';
import { ContentLayoutContent } from '@layouts';
import { LeagueHomeContentProps } from './types';
import LeagueInfo from './LeagueInfo';
import MemberStandings from './MemberStandings';

const LeagueHomeContent: React.FunctionComponent<LeagueHomeContentProps> = ({}) => {
    return (
        <ContentLayoutContent>
            <>
                <LeagueInfo />
                <MemberStandings />
            </>
        </ContentLayoutContent>
    );
};

export default LeagueHomeContent;
