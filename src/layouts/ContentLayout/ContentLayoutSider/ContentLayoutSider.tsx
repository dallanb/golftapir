import React from 'react';
import { ContentLayoutSiderProps } from './types';
import { SiderLayout } from '@layouts';

const ContentLayoutSider: React.FunctionComponent<ContentLayoutSiderProps> = ({
    header,
    content,
}) => {
    return <SiderLayout header={header} content={content} />;
};

export default ContentLayoutSider;
