import { pick as _pick } from 'lodash';
import { withS3URL } from '@utils';

export const prepareInitialValues = (contestData: any) => {
    return _pick(contestData, ['name', 'avatar', 'start_time']);
};

export const formatUploadSrc = (
    value: string,
    options: { s3Folder: string }
) => {
    if (value.startsWith('data:image')) {
        return value;
    } else {
        return withS3URL(value, options.s3Folder);
    }
};
