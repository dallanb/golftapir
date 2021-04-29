import { get as _get, pick as _pick } from 'lodash';
import { withS3URL } from '@utils';

export const prepareInitialValues = (contestData: any) => {
    const filename = _get(contestData, ['avatar', 's3_filename'], undefined);
    const avatar = filename && `${filename}?t=${new Date().getTime()}`;
    return { ..._pick(contestData, ['name', 'start_time']), avatar };
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
