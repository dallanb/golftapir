import React from 'react';
import { RowRendererProps } from './types';
import { Card } from 'antd';

let defaultRowRenderer: RowRendererProps;
defaultRowRenderer = ({ style, index }, items, history) => {
    let body = 'Loading...';
    if (index < items.length) {
        body = items[index].name;
    }
    return (
        <Card style={style} key={index}>
            {body}
        </Card>
    );
};

export default defaultRowRenderer;
