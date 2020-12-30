import { keyBy as _keyBy } from 'lodash';

export const findLowestScoringParticipant = (participants: any[]) => {
    const participantsHash = _keyBy(participants, 'score');
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
    return participantsHash[lowestParticipant];
};
