import React from 'react';
import { ContestsHeaderProps } from './types';
import { ContentLayoutHeader } from '@layouts';
import './ContestsHeader.scss';
import CONSTANTS from '@locale/en-CA';

const ContestsHeader: React.FunctionComponent<ContestsHeaderProps> = () => {
    const title = CONSTANTS.PAGES.CONTESTS.TITLE;
    const subTitle = CONSTANTS.PAGES.CONTESTS.DESCRIPTION;

    return <ContentLayoutHeader title={title} subTitle={subTitle} />;
};

export default ContestsHeader;
