import React from 'react';
import { useSelector } from 'react-redux';
import { HomeHeaderProps } from './types';
import { ContentLayoutHeader } from '@layouts';
import CONSTANTS from '@locale/en-CA';
import { selectMyName } from '@selectors/BaseSelector';
import { Breadcrumb } from '@apps/MemberApp/components';

const HomeHeader: React.FunctionComponent<HomeHeaderProps> = () => {
    const title = useSelector(selectMyName);
    const subTitle = CONSTANTS.PAGES.HOME.DESCRIPTION;
    const extra = <Breadcrumb />;
    return (
        <ContentLayoutHeader title={title} subTitle={subTitle} extra={extra} />
    );
};

export default HomeHeader;
