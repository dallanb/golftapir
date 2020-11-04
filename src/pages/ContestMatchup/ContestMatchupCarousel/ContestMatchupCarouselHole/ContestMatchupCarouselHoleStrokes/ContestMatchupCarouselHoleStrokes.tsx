import React from 'react';
import { ContestMatchupCarouselHoleStrokesProps } from './types';
import './ContestMatchupCarouselHoleStrokes.scss';
import { Statistic } from 'antd';

const ContestMatchupCarouselHoleStrokes: React.FunctionComponent<ContestMatchupCarouselHoleStrokesProps> = ({
    strokes,
}) => {
    return <Statistic title="Strokes" value={strokes || 'NA'} />;
};

export default ContestMatchupCarouselHoleStrokes;
