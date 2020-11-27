import React from 'react';
import { CompetitorsHeaderProps } from './types';
import { ContentLayoutHeader } from '@layouts';
import './ContestsHeader.scss';
import CONSTANTS from '@locale/en-CA';

const ContestsHeader: React.FunctionComponent<CompetitorsHeaderProps> = () => {
    const title = CONSTANTS.PAGES.COMPETITORS.TITLE;
    const subTitle = CONSTANTS.PAGES.COMPETITORS.DESCRIPTION;

    return <ContentLayoutHeader title={title} subTitle={subTitle} />;
};

export default ContestsHeader;
