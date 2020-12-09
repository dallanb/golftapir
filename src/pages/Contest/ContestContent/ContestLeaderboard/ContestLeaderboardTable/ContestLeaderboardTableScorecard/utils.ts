// Use this function to transform sheet data to be useful for the table component
export const normalizeData = (items: any[]) => {
    // hole
    const hole: any = { head: 'hole', tail: null };
    // par
    const par: any = { head: 'par', tail: null };
    // round
    const round: any = { head: 'round', tail: null };

    Object.entries(items).forEach(([key, item]: any) => {
        hole[`hole-${key}`] = parseInt(key);
        par[`hole-${key}`] = item.par;
        round[`hole-${key}`] = item.strokes;
    });
    return [hole, par, round];
};
