import React from 'react';
import { Spin } from 'antd';
import { OverlaySpinProps } from './types';
import './OverlaySpin.less';
import classnames from 'classnames';

const OverlaySpin: React.FunctionComponent<OverlaySpinProps> = ({
    visible = true,
    className,
    SpinComponent = Spin,
}) => {
    const cx = classnames(
        'overlay-spin-container',
        { hidden: !visible },
        className
    );
    return (
        <div className={cx}>
            <SpinComponent />
        </div>
    );
};

export default OverlaySpin;
