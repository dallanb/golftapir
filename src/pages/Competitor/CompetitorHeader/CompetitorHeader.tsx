import React from 'react';
import { useSelector } from 'react-redux';
import { selectAccountDisplayName } from '@pages/Competitor/selector';
import { CompetitorHeaderProps } from './types';
import { ContentLayoutHeader } from '@layouts';
import { Breadcrumb } from '@apps/MemberApp/components';
import CONSTANTS from '@locale/en-CA';
import './CompetitorHeader.less';

const CompetitorHeader: React.FunctionComponent<CompetitorHeaderProps> = () => {
    const title = useSelector(selectAccountDisplayName);
    const subTitle = CONSTANTS.PAGES.COMPETITOR.DESCRIPTION;
    const extra = <Breadcrumb />;
    return (
        <ContentLayoutHeader title={title} subTitle={subTitle} extra={extra} />
    );
};

export default CompetitorHeader;
