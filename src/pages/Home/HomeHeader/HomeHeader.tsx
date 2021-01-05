import React from 'react';
import { useSelector } from 'react-redux';
import { HomeHeaderProps } from './types';
import { ContentLayoutHeader } from '@layouts';
import CONSTANTS from '@locale/en-CA';
import { selectMyDisplayName } from '@selectors/BaseSelector';
import { Breadcrumb } from '@components';
import constantRoutes from '@constants/routes';

const HomeHeader: React.FunctionComponent<HomeHeaderProps> = () => {
    const title = useSelector(selectMyDisplayName);
    const subTitle = CONSTANTS.PAGES.HOME.DESCRIPTION;
    const extra = <Breadcrumb route={constantRoutes.ROUTES.HOME.ROUTE} />;
    return (
        <ContentLayoutHeader title={title} subTitle={subTitle} extra={extra} />
    );
};

export default HomeHeader;
