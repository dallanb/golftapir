import React from 'react';
import { CompetitorsHeaderProps } from './types';
import { ContentLayoutHeader } from '@layouts';
import CONSTANTS from '@locale/en-CA';
import './CompetitorsHeader.scss';

const ContestsHeader: React.FunctionComponent<CompetitorsHeaderProps> = () => {
    const title = CONSTANTS.PAGES.COMPETITORS.TITLE;
    const subTitle = CONSTANTS.PAGES.COMPETITORS.DESCRIPTION;

    return <ContentLayoutHeader title={title} subTitle={subTitle} />;
};

export default ContestsHeader;
