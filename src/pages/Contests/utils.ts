import { get as _get, groupBy as _groupBy } from 'lodash';

export const findLowestScoringParticipant = (participants: any[]) => {
    const participantsHash = _groupBy(participants, 'score');
    const lowestParticipant = Math.min(
        ...Object.keys(participantsHash).reduce(
            (accum: number[], key: string) => {
                const val = parseInt(key);
                if (!isNaN(val)) {
                    accum.push(val);
                }
                return accum;
            },
            []
        )
    );
    const leaders = _get(participantsHash, [lowestParticipant], []);
    return leaders.length === 1 ? leaders[0] : false;
};
