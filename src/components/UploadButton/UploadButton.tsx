import React from 'react';
import { UploadButtonProps } from './types';
import { PlusOutlined } from '@ant-design/icons/lib';
import './UploadButton.less';

const UploadButton: React.FunctionComponent<UploadButtonProps> = ({
    label,
}) => {
    return (
        <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>{label}</div>
        </div>
    );
};

export default UploadButton;
