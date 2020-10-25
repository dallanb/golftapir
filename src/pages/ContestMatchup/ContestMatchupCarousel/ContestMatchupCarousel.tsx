import React from 'react';
import { Carousel } from 'antd';
import { ContestMatchupCarouselProps } from './types';
import contestMatchupCarouselHolesRenderer from './contestMatchupCarouseHolesRenderer';
import './ContestMatchupCarousel.scss';

const ContestMatchupCarousel: React.FunctionComponent<ContestMatchupCarouselProps> = ({
    sheetUser,
}) => {
    const { holes } = sheetUser;
    const holeData = Object.values(holes);
    const Holes = contestMatchupCarouselHolesRenderer({ holeData });
    return (
        <Carousel className="contest-matchup-carousel" effect="fade">
            {Holes}
        </Carousel>
    );
};

export default ContestMatchupCarousel;
