import React from 'react';
import { ContentLayoutContentProps } from './types';
import { Spin } from 'antd';

const ContentLayoutContent: React.FunctionComponent<ContentLayoutContentProps> = ({
    showSpinner,
    children,
}) => {
    if (showSpinner) return <Spin style={{ width: '100%' }} />;
    return children;
};

export default ContentLayoutContent;
