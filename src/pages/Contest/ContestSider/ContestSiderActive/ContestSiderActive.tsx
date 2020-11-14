import React from 'react';
import { ContestSiderActiveProps } from './types';
import ContestScorecard from './ContestScorecard';
import ContestButtons from './ContestButtons';
import './ContestSiderActive.scss';

const ContestSiderActive: React.FunctionComponent<ContestSiderActiveProps> = () => {
    return (
        <>
            <ContestScorecard />
            <ContestButtons />
        </>
    );
};

export default ContestSiderActive;
