import React from 'react';
import { LeagueMembersHeaderProps } from './types';
import { ContentLayoutHeader } from '@layouts';
import { Breadcrumb } from '@components';
import CONSTANTS from '@locale/en-CA';
import './LeagueMembersHeader.less';

const ContestsHeader: React.FunctionComponent<LeagueMembersHeaderProps> = () => {
    const title = CONSTANTS.PAGES.LEAGUE_MEMBERS.TITLE;
    const subTitle = CONSTANTS.PAGES.LEAGUE_MEMBERS.DESCRIPTION;
    const extra = <Breadcrumb />;

    return (
        <ContentLayoutHeader title={title} subTitle={subTitle} extra={extra} />
    );
};

export default ContestsHeader;
