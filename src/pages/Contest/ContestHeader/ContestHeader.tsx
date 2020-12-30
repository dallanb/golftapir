import React from 'react';
import { ContestHeaderProps } from './types';
import HeaderTitle from './HeaderTitle';
import HeaderSubTitle from './HeaderSubTitle';
import { Breadcrumb } from '@components';
import { ContentLayoutHeader } from '@layouts';
import './ContestHeader.less';

const ContestHeader: React.FunctionComponent<ContestHeaderProps> = () => {
    return (
        <ContentLayoutHeader
            title={<HeaderTitle />}
            subTitle={<HeaderSubTitle />}
            extra={<Breadcrumb />}
        />
    );
};

export default ContestHeader;
