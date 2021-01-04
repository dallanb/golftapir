import React from 'react';
import { ContestHeaderProps } from './types';
import HeaderTitle from './HeaderTitle';
import HeaderSubTitle from './HeaderSubTitle';
import { Breadcrumb } from '@components';
import { ContentLayoutHeader } from '@layouts';
import constantRoutes from '@constants/routes';
import './ContestHeader.less';

const ContestHeader: React.FunctionComponent<ContestHeaderProps> = () => {
    return (
        <ContentLayoutHeader
            title={<HeaderTitle />}
            subTitle={<HeaderSubTitle />}
            extra={<Breadcrumb route={constantRoutes.ROUTES.CONTEST.ROUTE} />}
        />
    );
};

export default ContestHeader;
