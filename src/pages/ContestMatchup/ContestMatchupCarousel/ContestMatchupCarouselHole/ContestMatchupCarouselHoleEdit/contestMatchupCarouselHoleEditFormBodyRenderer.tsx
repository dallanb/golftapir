import React from 'react';
import ContestMatchupCarouselHoleEditForm from './ContestMatchupCarouselHoleEditForm';

export const contestMatchupCarouselHoleEditFormBodyRenderer: Function = (
    initialValues: any
) => {
    console.log(initialValues);
    return <ContestMatchupCarouselHoleEditForm initialValues={initialValues} />;
};
