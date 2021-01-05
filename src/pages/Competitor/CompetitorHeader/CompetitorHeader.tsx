import React from 'react';
import { useSelector } from 'react-redux';
import { selectMemberDisplayName } from '@pages/Competitor/selector';
import { CompetitorHeaderProps } from './types';
import { ContentLayoutHeader } from '@layouts';
import { Breadcrumb } from '@components';
import CONSTANTS from '@locale/en-CA';
import constantRoutes from '@constants/routes';
import './CompetitorHeader.less';

const CompetitorHeader: React.FunctionComponent<CompetitorHeaderProps> = () => {
    const title = useSelector(selectMemberDisplayName);
    const subTitle = CONSTANTS.PAGES.COMPETITOR.DESCRIPTION;
    const extra = <Breadcrumb route={constantRoutes.ROUTES.COMPETITOR.ROUTE} />;
    return (
        <ContentLayoutHeader title={title} subTitle={subTitle} extra={extra} />
    );
};

export default CompetitorHeader;
