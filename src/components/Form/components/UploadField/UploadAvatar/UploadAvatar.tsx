import React from 'react';
import { get as _get } from 'lodash';
import { DeleteOutlined } from '@ant-design/icons/lib';
import { UploadAvatarProps } from './types';
import { formatUploadSrc } from '@components/Form/utils';
import './UploadAvatar.less';

const UploadAvatar: React.FunctionComponent<UploadAvatarProps> = ({
    value,
    options,
    onDelete,
}) => {
    return (
        <div className="upload-avatar">
            <div className="upload-avatar-mask" />
            <div className="upload-avatar-buttons">
                <DeleteOutlined
                    className="upload-avatar-button delete"
                    onClick={onDelete}
                />
            </div>
            <img
                src={formatUploadSrc(value, {
                    s3Folder: _get(options, ['uploadS3Folder'], null),
                })}
                alt="avatar"
                style={{ width: '100%' }}
            />
        </div>
    );
};

export default UploadAvatar;
