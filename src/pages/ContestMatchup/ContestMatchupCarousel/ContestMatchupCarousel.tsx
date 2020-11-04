import React from 'react';
import { Carousel } from 'antd';
import { ContestMatchupCarouselProps } from './types';
import ContestMatchupCarouselContext from './ContestMatchupCarouselContext';
import contestMatchupCarouselHolesRenderer from './contestMatchupCarouseHolesRenderer';
import './ContestMatchupCarousel.scss';

const ContestMatchupCarousel: React.FunctionComponent<ContestMatchupCarouselProps> = ({
    sheetUser,
}) => {
    const { uuid: sheetUUID, holes } = sheetUser;
    const holeData = Object.values(holes);
    const Holes = contestMatchupCarouselHolesRenderer({ holeData });
    return (
        <ContestMatchupCarouselContext.Provider value={{ sheetUUID }}>
            <Carousel className="contest-matchup-carousel" effect="fade">
                {...Holes}
            </Carousel>
        </ContestMatchupCarouselContext.Provider>
    );
};

export default ContestMatchupCarousel;
