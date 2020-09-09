import React from 'react';
import { RowRendererProps } from './types';
import { Card } from 'antd';

let defaultRowRenderer: RowRendererProps;
defaultRowRenderer = ({ index, style, data }) => {
    const item = data[index];
    console.log(item);
    return (
        <Card style={style} key={index}>
            DALLAN BHATTI
        </Card>
    );
};

export default defaultRowRenderer;
