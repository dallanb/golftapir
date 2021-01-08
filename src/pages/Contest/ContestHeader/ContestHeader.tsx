import React from 'react';
import { useSelector } from 'react-redux';
import { ContestHeaderProps } from './types';
import HeaderTitle from './HeaderTitle';
import HeaderSubTitle from './HeaderSubTitle';
import { Breadcrumb } from '@components';
import { ContentLayoutHeader } from '@layouts';
import constantRoutes from '@constants/routes';
import {
    selectContestAvatarSrc,
    selectContestName,
} from '@pages/Contest/selector';
import './ContestHeader.less';

const ContestHeader: React.FunctionComponent<ContestHeaderProps> = () => {
    return (
        <ContentLayoutHeader
            avatar={{
                src: useSelector(selectContestAvatarSrc),
                name: useSelector(selectContestName),
                shape: 'square',
                size: 36,
            }}
            title={<HeaderTitle />}
            subTitle={<HeaderSubTitle />}
            extra={<Breadcrumb route={constantRoutes.ROUTES.CONTEST.ROUTE} />}
        />
    );
};

export default ContestHeader;
