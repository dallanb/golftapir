import config from 'Config';
import constants from '@constants';

const withS3URL = (
    filename: string,
    folder: string = constants.S3_FOLDERS.MEMBER.AVATAR,
    timestamp?: number
) => {
    if (!filename) {
        return undefined;
    }
    return timestamp
        ? `${config.S3_URL}${folder}${filename}?t=${timestamp}`
        : `${config.S3_URL}${folder}${filename}`;
};

export default withS3URL;
