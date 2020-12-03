import constants from '@constants';
import { get as _get } from 'lodash';
import { withS3URL } from '@utils';
import memoize from 'memoize-one';

export const getAvatarSrc = memoize((data: any): string => {
    let folder = '';
    let uuid = '';
    switch (data.topic) {
        case constants.TOPICS.CONTESTS:
            folder = constants.S3_FOLDERS.CONTEST.AVATAR;
            uuid = _get(data, ['properties', 'contest_uuid'], '');
            break;
        case constants.TOPICS.ACCOUNTS:
            folder = constants.S3_FOLDERS.ACCOUNT.AVATAR;
            uuid = _get(data, ['properties', 'participant_uuid'], '');
            break;
        default:
            return '';
    }
    return withS3URL(`${uuid}.jpeg`, folder);
});
