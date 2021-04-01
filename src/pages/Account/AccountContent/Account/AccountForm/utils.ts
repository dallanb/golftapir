import { get as _get } from 'lodash';
import { withS3URL } from '@utils';

export const formatUploadSrc = (value: any, options: { s3Folder: string }) => {
    if (typeof value == 'string' && value.startsWith('data:image')) {
        return value;
    } else {
        const s3Filename = _get(value, ['s3_filename']);
        const timestamp = _get(value, ['timestamp']);
        return withS3URL(s3Filename, options.s3Folder, timestamp);
    }
};
