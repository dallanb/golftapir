import React from 'react';
import { HoleScoreInfoProps } from './types';
import './HoleScoreInfo.less';
import CONSTANTS from '@locale/en-CA';

const HoleScoreInfo: React.FunctionComponent<HoleScoreInfoProps> = () => {
    return (
        <div className="hole-score-info">
            <div className="eagle">
                <div className="icon" />
                <div className="text">
                    {CONSTANTS.PAGES.CONTEST.SCORECARD.EAGLE}
                </div>
            </div>
            <div className="birdie">
                <div className="icon" />
                <div className="text">
                    {CONSTANTS.PAGES.CONTEST.SCORECARD.BIRDIE}
                </div>
            </div>
            <div className="bogey">
                <div className="icon" />
                <div className="text">
                    {CONSTANTS.PAGES.CONTEST.SCORECARD.BOGEY}
                </div>
            </div>
            <div className="double-bogey">
                <div className="icon" />
                <div className="text">
                    {CONSTANTS.PAGES.CONTEST.SCORECARD.DOUBLE_BOGEY}
                </div>
            </div>
        </div>
    );
};

export default HoleScoreInfo;
