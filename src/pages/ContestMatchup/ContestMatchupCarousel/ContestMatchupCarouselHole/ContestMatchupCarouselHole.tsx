import React from 'react';
import { Card, Statistic } from 'antd';
import { ContestMatchupCarouselHoleProps } from './types';
import './ContestMatchupCarouselHole.scss';
import ContestMatchupCarouselHoleEdit from './ContestMatchupCarouselHoleEdit';
import ContestMatchupCarouselHoleStrokes from './ContestMatchupCarouselHoleStrokes';

export const ContestMatchupCarouselHole: React.FunctionComponent<ContestMatchupCarouselHoleProps> = ({
    hole,
}) => {
    const { strokes, hole_number } = hole;
    return (
        <Card className="contest-matchup-carousel-hole" bordered={false}>
            <div className="contest-matchup-carousel-hole-edit">
                <ContestMatchupCarouselHoleEdit hole={hole} />
            </div>
            <div className="contest-matchup-carousel-hole-statics">
                <Statistic title="Hole Number" value={hole_number} />
                <ContestMatchupCarouselHoleStrokes strokes={strokes} />
            </div>
        </Card>
    );
};

export default ContestMatchupCarouselHole;
