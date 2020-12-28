import React from 'react';
import { LeaguesHeaderProps } from './types';
import { ContentLayoutHeader } from '@layouts';
import { Breadcrumb } from '@apps/MemberApp/components';
import './LeaguesHeader.less';
import CONSTANTS from '@locale/en-CA';

const LeaguesHeader: React.FunctionComponent<LeaguesHeaderProps> = () => {
    const title = CONSTANTS.PAGES.LEAGUES.TITLE;
    const subTitle = CONSTANTS.PAGES.LEAGUES.DESCRIPTION;
    const extra = <Breadcrumb />;
    return (
        <>
            <ContentLayoutHeader
                title={title}
                subTitle={subTitle}
                extra={extra}
            />
        </>
    );
};

export default LeaguesHeader;
