import React from 'react';
import { LeaguesCreateHeaderProps } from './types';
import { ContentLayoutHeader } from '@layouts';
import CONSTANTS from '@locale/en-CA';
import { Breadcrumb } from '@apps/MemberApp/components';

const LeaguesCreateHeader: React.FunctionComponent<LeaguesCreateHeaderProps> = () => {
    const title = CONSTANTS.PAGES.LEAGUES_CREATE.TITLE;
    const subTitle = CONSTANTS.PAGES.LEAGUES_CREATE.DESCRIPTION;
    const extra = <Breadcrumb />;
    return (
        <ContentLayoutHeader title={title} subTitle={subTitle} extra={extra} />
    );
};

export default LeaguesCreateHeader;
