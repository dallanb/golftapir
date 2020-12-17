import React from 'react';
import { ContestsHeaderProps } from './types';
import { ContentLayoutHeader } from '@layouts';
import { Breadcrumb } from '@apps/MemberApp/components';
import './ContestsHeader.less';
import CONSTANTS from '@locale/en-CA';

const ContestsHeader: React.FunctionComponent<ContestsHeaderProps> = () => {
    const title = CONSTANTS.PAGES.CONTESTS.TITLE;
    const subTitle = CONSTANTS.PAGES.CONTESTS.DESCRIPTION;

    return (
        <>
            <ContentLayoutHeader title={title} subTitle={subTitle} />
            <Breadcrumb />
        </>
    );
};

export default ContestsHeader;
