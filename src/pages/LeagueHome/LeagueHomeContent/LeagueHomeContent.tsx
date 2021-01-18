import React from 'react';
import { ContentLayoutContent } from '@layouts';
import { LeagueHomeContentProps } from './types';
import MemberStandings from './MemberStandings';

const LeagueHomeContent: React.FunctionComponent<LeagueHomeContentProps> = ({}) => {
    return (
        <ContentLayoutContent>
            <>
                <MemberStandings />
            </>
        </ContentLayoutContent>
    );
};

export default LeagueHomeContent;
