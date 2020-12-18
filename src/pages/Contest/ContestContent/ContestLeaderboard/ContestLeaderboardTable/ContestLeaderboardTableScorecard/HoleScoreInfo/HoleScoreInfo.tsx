import React from 'react';
import { HoleScoreInfoProps } from './types';
import './HoleScoreInfo.less';

const HoleScoreInfo: React.FunctionComponent<HoleScoreInfoProps> = () => {
    return (
        <div className="hole-score-info">
            <div className="eagle">
                <div className="icon" />
                <div className="text">Eagle</div>
            </div>
            <div className="birdie">
                <div className="icon" />
                <div className="text">Birdie</div>
            </div>
            <div className="bogey">
                <div className="icon" />
                <div className="text">Bogey</div>
            </div>
            <div className="double-bogey">
                <div className="icon" />
                <div className="text">Double Bogey</div>
            </div>
        </div>
    );
};

export default HoleScoreInfo;
