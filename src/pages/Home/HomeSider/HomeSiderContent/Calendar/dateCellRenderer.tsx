import React from 'react';
import { CalendarCellProps } from './types';
import './Calendar.less';
import { Badge } from 'antd';

const dateCellRenderer: React.FunctionComponent<CalendarCellProps> = ({
    date,
    data,
}) => {
    console.log(date);
    console.log(data);
    const items = data[date.date()] || [];
    return <>{items.length ? <Badge color="green" /> : null}</>;
};

export default dateCellRenderer;
