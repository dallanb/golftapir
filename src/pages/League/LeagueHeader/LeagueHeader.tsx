import React from 'react';
import { useSelector } from 'react-redux';
import { LeagueHeaderProps } from './types';
import { ContentLayoutHeader } from '@layouts';
import CONSTANTS from '@locale/en-CA';
import { selectLeagueName } from '../selector';
import { Breadcrumb } from '@apps/MemberApp/components';

const LeagueHeader: React.FunctionComponent<LeagueHeaderProps> = () => {
    const title = useSelector(selectLeagueName);
    const subTitle = CONSTANTS.PAGES.LEAGUE.DESCRIPTION;
    const extra = <Breadcrumb />;
    return (
        <ContentLayoutHeader title={title} subTitle={subTitle} extra={extra} />
    );
};

export default LeagueHeader;
