import React from 'react';
import { get as _get } from 'lodash';
import { PlusOutlined } from '@ant-design/icons/lib';
import { UploadFieldProps } from './types';
import UploadAvatar from './UploadAvatar';
import UploadButton from './UploadButton';
import CONSTANTS from '@locale/en-CA';
import './UploadField.less';

const UploadField: React.FunctionComponent<UploadFieldProps> = ({
    formik,
    name,
    value,
    options,
}) => {
    if (value) {
        const onDelete = () => {
            formik.setFieldValue(name, '');
        };
        return (
            <UploadAvatar value={value} options={options} onDelete={onDelete} />
        );
    } else {
        return (
            <UploadButton
                icon={_get(options, ['uploadIcon'], PlusOutlined)}
                label={_get(options, ['uploadLabel'], CONSTANTS.FORM.UPLOAD)}
            />
        );
    }
};

export default UploadField;
