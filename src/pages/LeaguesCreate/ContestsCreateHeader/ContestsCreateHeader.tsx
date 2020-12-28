import React from 'react';
import { ContestsCreateHeaderProps } from './types';
import { ContentLayoutHeader } from '@layouts';
import CONSTANTS from '@locale/en-CA';
import { Breadcrumb } from '@apps/MemberApp/components';

const ContestsCreateHeader: React.FunctionComponent<ContestsCreateHeaderProps> = () => {
    const title = CONSTANTS.PAGES.CONTESTS_CREATE.TITLE;
    const subTitle = CONSTANTS.PAGES.CONTESTS_CREATE.DESCRIPTION;
    const extra = <Breadcrumb />;
    return (
        <ContentLayoutHeader title={title} subTitle={subTitle} extra={extra} />
    );
};

export default ContestsCreateHeader;
