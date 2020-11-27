import React from 'react';
import { useSelector } from 'react-redux';
import { ContestUpdateHeaderProps } from './types';
import { ContentLayoutHeader } from '@layouts';
import CONSTANTS from '@locale/en-CA';
import { selectContestName } from '../selector';

const ContestUpdateHeader: React.FunctionComponent<ContestUpdateHeaderProps> = () => {
    const title = useSelector(selectContestName);
    const subTitle = CONSTANTS.PAGES.CONTEST_UPDATE.DESCRIPTION;
    return <ContentLayoutHeader title={title} subTitle={subTitle} />;
};

export default ContestUpdateHeader;
