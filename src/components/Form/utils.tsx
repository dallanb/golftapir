import React from 'react';
import { countries } from 'countries-list';
import { Select } from 'antd';
import { get as _get } from 'lodash';
import { withS3URL } from '@utils';

export const mapCountryOptions = (): JSX.Element[] =>
    Object.entries(countries).map(([key, country]) => (
        <Select.Option key={key} value={key}>
            {country.name}
        </Select.Option>
    ));

// AntD requires that we format nested values like this ['foo', 0, 'bar'] instead of 'foo.0.bar' so we will normalize that here
export const antdFormatName = (name: string): string[] => name.split('.');

export const formatUploadSrc = (src: any, options: { s3Folder: string }) => {
    let uploadSrc = src;
    if (typeof src === 'object') {
        const s3_filename = _get(src, ['s3_filename'], undefined);
        uploadSrc = withS3URL(s3_filename, options.s3Folder);
    }
    return uploadSrc;
};
