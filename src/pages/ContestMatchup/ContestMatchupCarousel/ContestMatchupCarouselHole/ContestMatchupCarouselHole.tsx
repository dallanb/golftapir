import React from 'react';
import { Card, Statistic } from 'antd';
import { ContestMatchupCarouselHoleProps } from './types';
import './ContestMatchupCarouselHole.scss';

export const ContestMatchupCarouselHole: React.FunctionComponent<ContestMatchupCarouselHoleProps> = ({
    hole,
}) => {
    const { strokes, hole_number } = hole;
    return (
        <Card className="contest-matchup-carousel-hole" bordered={false}>
            <div className="contest-matchup-carousel-hole-statics">
                <Statistic title="Hole Number" value={hole_number} />
                <Statistic title="Strokes" value={strokes || 'NA'} />
            </div>
        </Card>
    );
};

export default ContestMatchupCarouselHole;
