import React from 'react';
import { RowRendererProps } from './types';
import { Card } from 'antd';

let defaultRowRenderer: RowRendererProps;
defaultRowRenderer = ({ style, index }, items) => {
    let body = 'Loading...';
    if (index < items.length) {
        body = index;
    }
    return (
        <Card style={style} key={index}>
            {body}
        </Card>
    );
};

export default defaultRowRenderer;
