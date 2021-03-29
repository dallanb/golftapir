import React from 'react';
import { LeagueHomeSiderProps } from './types';
import SiderLayoutContent from '@layouts/SiderLayout/SiderLayoutContent';
import MemberStats from '@pages/LeagueHome/LeagueHomeSider/MemberStats';

const LeagueHomeSider: React.FunctionComponent<LeagueHomeSiderProps> = () => {
    return (
        <SiderLayoutContent>
            <MemberStats />
        </SiderLayoutContent>
    );
};

export default LeagueHomeSider;
