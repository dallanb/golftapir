import config from 'config';
import constants from '@constants';

const withS3URL = (
    filename: string,
    folder: string = constants.S3_FOLDERS.MEMBER.AVATAR
) => {
    if (!filename) {
        return undefined;
    }
    return `${config.S3_URL}${folder}${filename}`;
};

export default withS3URL;
