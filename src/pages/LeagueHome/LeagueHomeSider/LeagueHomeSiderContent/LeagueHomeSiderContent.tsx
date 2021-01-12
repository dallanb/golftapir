import React from 'react';
import SiderLayoutContent from '@layouts/SiderLayout/SiderLayoutContent';
import { LeagueHomeSiderContentProps } from './types';
import Calendar from './Calendar';

const LeagueHomeSiderContent: React.FunctionComponent<LeagueHomeSiderContentProps> = ({}) => {
    return (
        <SiderLayoutContent>
            <Calendar />
        </SiderLayoutContent>
    );
};

export default LeagueHomeSiderContent;
