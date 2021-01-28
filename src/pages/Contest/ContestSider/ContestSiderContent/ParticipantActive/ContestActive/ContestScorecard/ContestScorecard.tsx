import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ComponentContent from '@layouts/ComponentContent';
import ContestScorecardInput from './ContestScorecardInput';
import ContestScorecardHole from './ContestScorecardHole';
import { ContestScorecardProps } from './types';
import { selectData, selectSheet } from '../selector';
import './ContestScorecard.less';

const ContestScorecard: React.FunctionComponent<ContestScorecardProps> = () => {
    const { isInitialized } = useSelector(selectData);

    const [hole, setHole] = useState(1);
    return (
        <>
            <ComponentContent
                className="contest-scorecard-input-component space"
                showSpinner={!isInitialized}
                title={'Hole'}
            >
                <ContestScorecardInput hole={hole} />
                <ContestScorecardHole hole={hole} setHole={setHole} />
            </ComponentContent>
        </>
    );
};

export default ContestScorecard;
