import constants from '@constants';
import { get as _get } from 'lodash';
import { withS3URL } from '@utils';
import memoize from 'memoize-one';
import moment from 'moment';

export const getAvatarSrc = memoize((data: any): string | undefined => {
    let folder = '';
    let uuid = '';
    switch (data.topic) {
        case constants.TOPICS.CONTESTS:
            folder = constants.S3_FOLDERS.CONTEST.AVATAR;
            uuid = _get(data, ['properties', 'contest_uuid'], '');
            break;
        case constants.TOPICS.MEMBERS:
        case constants.TOPICS.LEAGUES:
            folder = constants.S3_FOLDERS.LEAGUE.AVATAR;
            uuid = _get(data, ['properties', 'league_uuid'], '');
            break;
        default:
            return '';
    }
    return withS3URL(`${uuid}.jpeg`, folder);
});

export const formatTimeString = (timeString: string) =>
    moment(timeString).fromNow();
