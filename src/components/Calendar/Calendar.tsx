import React, { useState } from 'react';
import moment from 'moment';
import { Calendar as AntdCalendar } from 'antd';
import { CalendarProps } from './types';
import defaultHeaderRenderer from './defaultHeaderRenderer';
import defaultDateCellRenderer from './defaultDateCellRenderer';
import List from './List';
import './Calendar.less';

const Calendar: React.FunctionComponent<CalendarProps> = ({
    date,
    data,
    onChange,
    onListItemClick,
    headerRenderer = defaultHeaderRenderer,
    dateCellRenderer = defaultDateCellRenderer,
}) => {
    return (
        <>
            <AntdCalendar
                fullscreen={false}
                headerRender={headerRenderer}
                dateCellRender={(date) => dateCellRenderer({ date, data })}
                value={date}
                onChange={onChange}
                className="calendar"
            />
            <List date={date} data={data} onClick={onListItemClick} />
        </>
    );
};

export default Calendar;
