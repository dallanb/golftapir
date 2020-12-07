import { countBy as _countBy, get as _get, set as _set } from 'lodash';
import constants from '@constants';
import moment from 'moment';
import ContestPageActions from './actions';

export const prepareParticipant = (
    uuid: string,
    accountHash: any
): {
    name: string;
    s3_filename: string;
    account: any;
} => {
    const participant = { name: '', s3_filename: '', account: null };
    const account = _get(accountHash, [uuid], {
        first_name: '',
        last_name: '',
        avatar: { s3_filename: '' },
    });
    participant.account = account;
    participant.name = `${account.first_name} ${account.last_name}`;
    participant.s3_filename = _get(account, ['avatar', 's3_filename'], '');
    return participant;
};

export const mergeContestParticipant = (
    existingParticipants: any,
    newParticipant: any
): any =>
    existingParticipants.map((existingParticipant: any) =>
        existingParticipant.uuid === newParticipant.uuid
            ? { ...existingParticipant, ...newParticipant }
            : existingParticipant
    );

export const socketEventHandlers = (socket: WebSocket, emitter: any) => {
    socket.onmessage = (evt: MessageEvent) => {
        const data = JSON.parse(evt.data);
        // console.log(data);
        const [topic, event] = data.event.split(':');
        switch (topic) {
            case constants.TOPICS.CONTESTS:
                switch (event) {
                    case constants.EVENTS.CONTESTS.PARTICIPANT_ACTIVE:
                        emitter(ContestPageActions.refresh());
                        break;
                    case constants.EVENTS.CONTESTS.CONTEST_READY:
                        emitter(ContestPageActions.refresh());
                        break;
                    case constants.EVENTS.CONTESTS.CONTEST_ACTIVE:
                        emitter(ContestPageActions.refresh());
                        break;
                    default:
                        break;
                }
                break;
            case constants.TOPICS.SCORES:
                switch (event) {
                    case constants.EVENTS.SCORES.STROKE_UPDATE:
                        emitter(
                            ContestPageActions.updateContestParticipantScore(
                                data.participant_uuid,
                                data.strokes,
                                data.score
                            )
                        );
                        break;
                }
                break;
            default:
                break;
        }
    };
    return () => {};
};

export const formatTimeStamp = (timestamp: number) =>
    timestamp ? moment(timestamp).format('MMM DD H:M A') : 'NA';

// main level function
export const initLookup = (sheets: any[]) => {
    const scores = sheets.map(({ score }) => score);
    const count = _countBy(scores);
    const sortedCountKeys = Object.keys(count).sort(
        (a, b) => parseInt(a) - parseInt(b)
    );
    return sortedCountKeys.reduce((lookup: any, score, idx) => {
        lookup[score] = { rank: 1, count: null, prev: null, next: null };
        lookup[score]['count'] = count[score];
        const prev = _get(sortedCountKeys, [idx - 1], null);
        if (prev !== null) {
            lookup[prev]['next'] = score;
            lookup[score]['rank'] =
                lookup[prev]['rank'] + lookup[prev]['count'];
        }
        lookup[score]['prev'] = prev;
        return lookup;
    }, {});
};

// main level function
export const ranker = (lookup: any, score: any) => {
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
        if (dir === 'prev') {
            while (
                lookup[curr]['prev'] !== null &&
                lookup[curr]['prev'] > new_score
            ) {
                curr = lookup[curr]['prev'];
            }
            lookup[new_score]['prev'] = lookup[curr]['prev'];
            lookup[new_score]['next'] = curr;
            if (lookup[curr]['prev'] !== null) {
                lookup[lookup[curr]['prev']]['next'] = new_score;
            }
            lookup[curr]['prev'] = new_score;
        } else {
            while (
                lookup[curr]['next'] !== null &&
                lookup[curr]['next'] < new_score
            ) {
                curr = lookup[curr]['next'];
            }
            lookup[new_score]['next'] = lookup[curr]['next'];
            lookup[new_score]['prev'] = curr;
            if (lookup[curr]['next'] !== null) {
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
        if (prev !== null) {
            lookup[prev]['next'] = lookup[score]['next'];
        }
        if (next !== null) {
            lookup[next]['prev'] = lookup[score]['prev'];
        }
    }
};

const _updateRank = (lookup: any, new_score: number, old_score: number) => {
    const dir = new_score < old_score ? 'prev' : 'next';
    let curr = old_score;
    while (true) {
        _setRank(lookup, curr);
        if (curr === new_score) break;
        curr = lookup[curr][dir];
    }
};

const _setRank = (lookup: any, score: number) => {
    const prev = lookup[score]['prev'];
    if (prev !== null) {
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
