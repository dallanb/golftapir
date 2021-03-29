import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { SiderComponentContent } from '@layouts/ComponentContent';
import ContestScorecardInput from './ContestScorecardInput';
import ContestScorecardHole from './ContestScorecardHole';
import { ContestScorecardProps } from './types';
import { selectData } from '../selector';
import CONSTANTS from '@locale/en-CA';
import './ContestScorecard.less';

const ContestScorecard: React.FunctionComponent<ContestScorecardProps> = () => {
    const { isInitialized } = useSelector(selectData);

    const [hole, setHole] = useState(1);
    return (
        <>
            <SiderComponentContent
                className="contest-scorecard-input-component space"
                showSpinner={!isInitialized}
                title={CONSTANTS.PAGES.CONTEST.SCORECARD.HOLE}
            >
                <ContestScorecardInput hole={hole} />
                <ContestScorecardHole hole={hole} setHole={setHole} />
            </SiderComponentContent>
        </>
    );
};

export default ContestScorecard;
