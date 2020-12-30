import React from 'react';
import { useSelector } from 'react-redux';
import { ContentLayoutContent } from '@layouts';
import Leagues from './Leagues';
import { LeaguesContentProps } from './types';
import { selectData } from '../selector';

const LeaguesContent: React.FunctionComponent<LeaguesContentProps> = ({}) => {
    const { isInitialized } = useSelector(selectData);
    return (
        <ContentLayoutContent showSpinner={!isInitialized}>
            <Leagues />
        </ContentLayoutContent>
    );
};

export default LeaguesContent;
