import React from 'react';
import { RowRendererProps } from './types';
import { Card } from 'antd';

let defaultRowRenderer: RowRendererProps;
defaultRowRenderer = ({ style, index, data }, history) => {
    console.log(data);
    let body = 'Loading...';
    if (index < data.length) {
        body = data[index].name;
    }
    return (
        <Card style={style} key={index}>
            {body}
        </Card>
    );
};

export default defaultRowRenderer;
