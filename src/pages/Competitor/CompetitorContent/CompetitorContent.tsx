import React from 'react';
import { useSelector } from 'react-redux';
import { ContentLayoutContent } from '@layouts';
import CompetitorResults from './CompetitorResults';
import { CompetitorContentProps } from './types';
import { selectData } from '../selector';
import './CompetitorContent.scss';

const CompetitorContent: React.FunctionComponent<CompetitorContentProps> = ({}) => {
    const { isInitialized } = useSelector(selectData);
    return (
        <ContentLayoutContent showSpinner={!isInitialized}>
            <CompetitorResults />
        </ContentLayoutContent>
    );
};

export default CompetitorContent;
