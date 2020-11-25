import React from 'react';
import { Spin } from 'antd';
import { SiderLayoutContentProps } from './types';

const SiderLayoutContent: React.FunctionComponent<SiderLayoutContentProps> = ({
    showSpinner,
    children,
}) => {
    if (showSpinner) {
        return <Spin />;
    }
    return children;
};

export default SiderLayoutContent;
