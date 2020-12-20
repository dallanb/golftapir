import React from 'react';
import classnames from 'classnames';
import Icon from '@ant-design/icons';
import { UploadIconProps } from './types';
import './UploadIcon.less';
import { DeleteOutlined } from '@ant-design/icons/lib';

const UploadIcon: React.FunctionComponent<UploadIconProps> = ({
    value,
    icon,
    text,
    height,
    width,
    className,
}) => {
    const textRenderer = (iconText?: string) => {
        if (!iconText) {
            return null;
        }
        return <div className="upload-icon-text">{iconText}</div>;
    };
    const cx = classnames('upload-icon', { empty: !value });
    const iconCx = classnames('upload-icon-icon', className);
    return (
        <div className={cx}>
            <div className="upload-icon-wrapper" style={{ height, width }}>
                {textRenderer(text)}
                <Icon component={icon} className={iconCx} />
                <DeleteOutlined className="upload-icon-trash" />
            </div>
        </div>
    );
};

export default UploadIcon;
