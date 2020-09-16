import config from 'config';

const withS3URL = (filename: string) => `${config.S3_URL}${filename}`;

export default withS3URL;
