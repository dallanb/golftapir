import React from 'react';
import { ContestMatchupCarouselHolesProps } from './types';
import ContestMatchupCarouselHole from './ContestMatchupCarouselHole';

const contestMatchupCarouselHolesRenderer: Function = ({
    holeData,
}: ContestMatchupCarouselHolesProps): JSX.Element[] =>
    holeData.map(
        (hole: any, index): JSX.Element => (
            <ContestMatchupCarouselHole
                key={index + 1}
                hole={{ ...hole, hole_number: index + 1 }}
            />
        )
    );

export default contestMatchupCarouselHolesRenderer;
