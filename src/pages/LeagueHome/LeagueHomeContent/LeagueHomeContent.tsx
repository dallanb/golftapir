import React from 'react';
import { ContentLayoutContent } from '@layouts';
import { LeagueHomeContentProps } from './types';
import MemberStats from './MemberStats';
import MemberStandings from './MemberStandings';

const LeagueHomeContent: React.FunctionComponent<LeagueHomeContentProps> = ({}) => {
    return (
        <ContentLayoutContent>
            <>
                <MemberStats />
                <MemberStandings />
            </>
        </ContentLayoutContent>
    );
};

export default LeagueHomeContent;
