import React from 'react';
import classnames from 'classnames';
import Icon from '@ant-design/icons';
import { UploadIconProps } from './types';
import './UploadIcon.less';
const UploadIcon: React.FunctionComponent<UploadIconProps> = ({
    icon,
    height,
    width,
    className,
}) => {
    const iconCx = classnames('upload-icon-icon', className);
    return (
        <div className="upload-icon">
            <div className="upload-icon-wrapper" style={{ height, width }}>
                <Icon component={icon} className={iconCx} />
            </div>
        </div>
    );
};

export default UploadIcon;
