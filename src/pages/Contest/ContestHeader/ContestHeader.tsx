import React from 'react';
import { useSelector } from 'react-redux';
import {
    selectContestName,
    selectContestAvatarSrc,
} from '@pages/Contest/selector';
import { ContestHeaderProps } from './types';
import HeaderTitle from './HeaderTitle';
import HeaderSubTitle from './HeaderSubTitle';
import { Breadcrumb } from '@apps/MemberApp/components';
import { ContentLayoutHeader } from '@layouts';
import './ContestHeader.less';

const ContestHeader: React.FunctionComponent<ContestHeaderProps> = () => {
    return (
        <ContentLayoutHeader
            title={<HeaderTitle />}
            subTitle={<HeaderSubTitle />}
            extra={<Breadcrumb />}
            avatar={{
                name: useSelector(selectContestName),
                src: useSelector(selectContestAvatarSrc),
                size: 72,
            }}
        />
    );
};

export default ContestHeader;
