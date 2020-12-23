import React from 'react';
import classnames from 'classnames';
import Icon from '@ant-design/icons';
import { UploadButtonProps } from './types';
import './UploadButton.less';

const UploadButton: React.FunctionComponent<UploadButtonProps> = ({
    label,
    icon,
    className,
    iconClassName,
    labelClassName,
}) => {
    const cx = classnames('upload-button', className);
    const iconCx = classnames('upload-button-icon', iconClassName);
    const labelCx = classnames('upload-button-label', labelClassName);
    return (
        <div className={cx}>
            <Icon component={icon} className={iconCx} />
            <div style={{ marginTop: 8 }} className={labelCx}>
                {label}
            </div>
        </div>
    );
};

export default UploadButton;
