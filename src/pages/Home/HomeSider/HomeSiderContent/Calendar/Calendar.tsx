import React from 'react';
import { Badge, Calendar as AntdCalendar } from 'antd';
import { CalendarProps } from './types';
import ComponentContent from '@layouts/ComponentContent';
import headerRenderer from './headerRenderer';
import './Calendar.less';

const Calendar: React.FunctionComponent<CalendarProps> = () => {
    return (
        <ComponentContent
            showSpinner={false}
            className="calendar-component-content"
        >
            <AntdCalendar fullscreen={false} headerRender={headerRenderer} />
        </ComponentContent>
    );
};

export default Calendar;
