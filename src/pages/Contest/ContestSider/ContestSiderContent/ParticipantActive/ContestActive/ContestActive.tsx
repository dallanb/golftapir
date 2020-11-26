import React from 'react';
import { useSelector } from 'react-redux';
import ComponentContent from '@layouts/ComponentContent';
import { ContestActiveProps } from './types';
import ContestScorecard from './ContestScorecard';
import ContestButtons from './ContestButtons';
import { selectData } from './selector';
import './ContestActive.scss';

const ContestActive: React.FunctionComponent<ContestActiveProps> = () => {
    const { isInitialized } = useSelector(selectData);
    return (
        <ComponentContent showSpinner={!isInitialized}>
            <ContestScorecard />
            <ContestButtons />
        </ComponentContent>
    );
};

export default ContestActive;
