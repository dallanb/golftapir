import React from 'react';
import { CompetitorsHeaderProps } from './types';
import { ContentLayoutHeader } from '@layouts';
import { Breadcrumb } from '@components';
import CONSTANTS from '@locale/en-CA';
import './CompetitorsHeader.less';

const ContestsHeader: React.FunctionComponent<CompetitorsHeaderProps> = () => {
    const title = CONSTANTS.PAGES.COMPETITORS.TITLE;
    const subTitle = CONSTANTS.PAGES.COMPETITORS.DESCRIPTION;
    const extra = <Breadcrumb />;

    return (
        <ContentLayoutHeader title={title} subTitle={subTitle} extra={extra} />
    );
};

export default ContestsHeader;
