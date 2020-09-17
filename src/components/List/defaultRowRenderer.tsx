import React from 'react';
import { Card } from 'antd';
import { ListChildComponentProps } from 'react-window';

const defaultRowRenderer: React.FunctionComponent<ListChildComponentProps> = ({
    style,
    index,
    data,
}) => {
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
