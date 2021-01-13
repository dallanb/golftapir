import React from 'react';
import { ContentLayoutContent } from '@layouts';
import { LeagueHomeContentProps } from './types';
import MemberStats from './MemberStats';
import ComponentContent from '@layouts/ComponentContent';

const LeagueHomeContent: React.FunctionComponent<LeagueHomeContentProps> = ({}) => {
    return (
        <ContentLayoutContent>
            <>
                <MemberStats />
                <ComponentContent style={{ marginTop: '16px' }}>
                    <div>YO</div>
                </ComponentContent>
            </>
        </ContentLayoutContent>
    );
};

export default LeagueHomeContent;
