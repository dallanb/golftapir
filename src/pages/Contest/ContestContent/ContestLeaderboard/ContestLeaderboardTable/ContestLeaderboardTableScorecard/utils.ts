// Use this function to transform sheet data to be useful for the table component
import constants from '@constants';

export const normalizeData = (items: any[]) => {
    // hole
    const hole: any = { head: constants.SCORECARD.HOLE, tail: 'TOT' };
    // par
    const par: any = { head: constants.SCORECARD.PAR, tail: null };
    // round
    const round: any = { head: constants.SCORECARD.ROUND, tail: null };
    // status
    const status: any = { head: constants.SCORECARD.STATUS, tail: null };

    Object.entries(items).forEach(([key, item]: any) => {
        // hole
        hole[`hole-${key}`] = parseInt(key);
        // par
        par[`hole-${key}`] = item.par;
        par['tail'] += item.par;
        // round
        if (item.strokes) {
            round[`hole-${key}`] = item.strokes;
            round['tail'] += item.strokes;
        } else {
            round[`hole-${key}`] = 'NA';
        }
        // status
        if (item.strokes) {
            status[`hole-${key}`] = item.strokes - item.par;
            status['tail'] += item.strokes - item.par;
        } else {
            status[`hole-${key}`] = 'NA';
        }
    });
    return [hole, par, round, status];
};
