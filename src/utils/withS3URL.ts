import config from 'config';
import constants from '@constants';

const withS3URL = (
    filename: string,
    folder: string = constants.S3_FOLDERS.MEMBER.AVATAR
) => `${config.S3_URL}${folder}${filename}`;

export default withS3URL;
