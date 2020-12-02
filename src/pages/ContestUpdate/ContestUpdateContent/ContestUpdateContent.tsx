import React from 'react';
import { useSelector } from 'react-redux';
import { ContentLayoutContent } from '@layouts';
import ContestUpdate from './Contest';
import { ContestUpdateContentProps } from './types';
import { selectData } from '../selector';

const ContestUpdateContent: React.FunctionComponent<ContestUpdateContentProps> = ({}) => {
    const { isInitialized } = useSelector(selectData);
    return (
        <ContentLayoutContent showSpinner={!isInitialized}>
            <ContestUpdate />
        </ContentLayoutContent>
    );
};

export default ContestUpdateContent;
