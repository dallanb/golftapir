import React from 'react';
import { ContestsCreateHeaderProps } from './types';
import { ContentLayoutHeader } from '@layouts';
import CONSTANTS from '@locale/en-CA';

const ContestsCreateHeader: React.FunctionComponent<ContestsCreateHeaderProps> = () => {
    const title = CONSTANTS.PAGES.CONTESTS_CREATE.TITLE;
    const subTitle = CONSTANTS.PAGES.CONTESTS_CREATE.DESCRIPTION;
    return <ContentLayoutHeader title={title} subTitle={subTitle} />;
};

export default ContestsCreateHeader;
