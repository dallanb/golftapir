import React from 'react';
import { ContestActiveProps } from './types';
import ContestScorecard from './ContestScorecard';
import ContestButtons from './ContestButtons';
import './ContestActive.scss';

const ContestActive: React.FunctionComponent<ContestActiveProps> = () => {
    return (
        <>
            <ContestScorecard />
            <ContestButtons />
        </>
    );
};

export default ContestActive;
