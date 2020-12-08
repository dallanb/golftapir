// main level function
import {
    countBy as _countBy,
    cloneDeep as _cloneDeep,
    get as _get,
} from 'lodash';

export const initLookup = (sheets: any[]) => {
    const scores = sheets.reduce(
        (scores, { score }) => (score != null ? scores.concat(score) : scores),
        []
    );
    const count = _countBy(scores);
    const sortedCountKeys = Object.keys(count).sort(
        (a, b) => parseInt(a) - parseInt(b)
    );
    return _lookupPopulate(sortedCountKeys, {}, count);
};

const _appendLookup = (lookup: any, score: any) => {
    if (lookup[score]) {
        lookup[score]['count']++;
    } else {
        const sortedKeys = [...Object.keys(lookup), score].sort(
            (a, b) => parseInt(a) - parseInt(b)
        );
        _lookupPopulate(sortedKeys, lookup, {});
    }
};

const _lookupPopulate = (
    sortedKeys: any[],
    initialLookup = {},
    count: any = {}
) =>
    sortedKeys.reduce((lookup: any, score, idx) => {
        if (!lookup[score]) {
            lookup[score] = { rank: 1, count: 1, prev: null, next: null };
            if (count[score]) {
                lookup[score]['count'] = count[score];
            }
        }
        const prev = _get(sortedKeys, [idx - 1], null);
        if (prev != null) {
            lookup[prev]['next'] = score;
            lookup[score]['rank'] =
                lookup[prev]['rank'] + lookup[prev]['count'];
        }
        lookup[score]['prev'] = prev;
        return lookup;
    }, initialLookup);

// Algorithm
/*  1. Go to new score and increment count
 *       - if new does not exist, create it and assign prev, next, and rank accordingly *$* */
/*  2. Go to prev score and decrement count
 *       - if count == 0 assign prev and next accordingly  *$$* */
/*  3. Check if new is greater or less than. This is the direction we will be traversing (ie gt == next chain AND lt == prev chain).  */
/*  4. Until we hit new, update the rank according to prev rank + prev count.
*       - if prev is null than set rank to 1 [normalize null to 0]
/*  5. Check to see if count == 0 for old and remove if true
*
 */
/*  Notes:
 *       *$*: We will have two conditions for finding where to insert new:
 *               - if new is lt old, traverse the prev chain from old and check if the value of prev is lt than new (if
 *                 this condition fails this is where we insert new). Set rank prev rank + prev count. Do *$$*.
 *       *$$*: Go to prev object and replace their next property value with the next property value of removed & Go to
 *             next object and replace their prev property value with the prev property value of removed.
 *
 */
// main level function
export const handleScoreUpdate = (sheets: any, lookup: any, score: any) => {
    const { participant } = score;
    const localLookup = _cloneDeep(lookup);
    const localSheets = _cloneDeep(sheets);
    const sheet = sheets[participant];
    const localSheet = localSheets[participant];

    localSheet.score = score.score;
    localSheet.strokes = score.strokes;

    if (sheet.score != null) {
        _ranker(localLookup, { prev_score: sheet.score, score: score.score });
    } else {
        _appendLookup(localLookup, localSheet.score);
    }

    return { lookup: localLookup, sheet: { [participant]: localSheet } };
};

const _ranker = (lookup: any, score: any) => {
    // handle new score
    _newScore(lookup, score.score, score.prev_score);
    // handle old score
    _oldScore(lookup, score.prev_score);
    // update rank of lookup
    _updateRank(lookup, score.score, score.prev_score);
    // clean up (remove old if count is 0)
    _cleanUp(lookup, score.prev_score);
};

const _newScore = (lookup: any, new_score: number, old_score: number) => {
    if (lookup[new_score]) {
        lookup[new_score]['count']++;
    } else {
        lookup[new_score] = { rank: null, count: 1, prev: null, next: null };
        const dir = new_score < old_score ? 'prev' : 'next';
        let curr = old_score;
        // find the entry that is closest to new
        if (dir == 'prev') {
            while (
                lookup[curr]['prev'] != null &&
                lookup[curr]['prev'] > new_score
            ) {
                curr = lookup[curr]['prev'];
            }
            lookup[new_score]['prev'] = lookup[curr]['prev'];
            lookup[new_score]['next'] = curr;
            if (lookup[curr]['prev'] != null) {
                lookup[lookup[curr]['prev']]['next'] = new_score;
            }
            lookup[curr]['prev'] = new_score;
        } else {
            while (
                lookup[curr]['next'] != null &&
                lookup[curr]['next'] < new_score
            ) {
                curr = lookup[curr]['next'];
            }
            lookup[new_score]['next'] = lookup[curr]['next'];
            lookup[new_score]['prev'] = curr;
            if (lookup[curr]['next'] != null) {
                lookup[lookup[curr]['next']]['prev'] = new_score;
            }
            lookup[curr]['next'] = new_score;
        }
        // set rank
        _setRank(lookup, new_score);
    }
};

const _oldScore = (lookup: any, score: number) => {
    lookup[score]['count']--;
    if (!lookup[score]['count']) {
        const prev = lookup[score]['prev'];
        const next = lookup[score]['next'];
        if (prev != null) {
            lookup[prev]['next'] = lookup[score]['next'];
        }
        if (next != null) {
            lookup[next]['prev'] = lookup[score]['prev'];
        }
    }
};

// This could probably be improved further but it is safe for now
const _updateRank = (lookup: any, new_score: number, old_score: number) => {
    const keys: any = Object.keys(lookup).map(Number);
    let curr = Math.min(...keys);
    while (true) {
        _setRank(lookup, curr);
        curr = lookup[curr]['next'];
        if (curr == null) break;
    }
};

const _setRank = (lookup: any, score: number) => {
    const prev = lookup[score]['prev'];

    if (prev != null) {
        lookup[score]['rank'] = lookup[prev]['rank'] + lookup[prev]['count'];
    } else {
        lookup[score]['rank'] = 1;
    }
};

const _cleanUp = (lookup: any, score: number) => {
    if (!lookup[score]['count']) {
        delete lookup[score];
    }
};
