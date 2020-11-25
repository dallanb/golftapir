import React from 'react';
import { useSelector } from 'react-redux';
import { pick as _pick } from 'lodash';
import { selectData } from './selector';
import { CompetitorHeaderProps } from './types';
import { ContentLayoutHeader } from '@layouts';

const CompetitorHeader: React.FunctionComponent<CompetitorHeaderProps> = () => {
    const headerProps = _pick(useSelector(selectData), [
        'isFetching',
        'title',
        'subTitle',
        'avatar',
    ]);
    return <ContentLayoutHeader {...headerProps} />;
};

export default CompetitorHeader;
