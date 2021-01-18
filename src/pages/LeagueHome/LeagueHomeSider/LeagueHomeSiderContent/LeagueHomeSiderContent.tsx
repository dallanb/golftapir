import React from 'react';
import SiderLayoutContent from '@layouts/SiderLayout/SiderLayoutContent';
import { LeagueHomeSiderContentProps } from './types';
import MemberStats from './MemberStats';
import Calendar from './Calendar';

const LeagueHomeSiderContent: React.FunctionComponent<LeagueHomeSiderContentProps> = ({}) => {
    return (
        <SiderLayoutContent>
            <>
                <MemberStats />
                <Calendar />
            </>
        </SiderLayoutContent>
    );
};

export default LeagueHomeSiderContent;
