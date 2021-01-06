import React from 'react';
import { MemberHeaderProps } from './types';
import { ContentLayoutHeader } from '@layouts';
import { Breadcrumb } from '@components';
import CONSTANTS from '@locale/en-CA';
import constantRoutes from '@constants/routes';
import './MemberHeader.less';

const ContestsHeader: React.FunctionComponent<MemberHeaderProps> = () => {
    const title = CONSTANTS.PAGES.MEMBER.TITLE;
    const subTitle = CONSTANTS.PAGES.MEMBER.DESCRIPTION;
    const extra = <Breadcrumb route={constantRoutes.ROUTES.MEMBER.ROUTE} />;

    return (
        <ContentLayoutHeader title={title} subTitle={subTitle} extra={extra} />
    );
};

export default ContestsHeader;
