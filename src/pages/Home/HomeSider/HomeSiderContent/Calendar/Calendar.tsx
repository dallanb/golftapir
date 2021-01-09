import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment, { Moment } from 'moment';
import { Badge, Calendar as AntdCalendar } from 'antd';
import { CalendarProps } from './types';
import ComponentContent from '@layouts/ComponentContent';
import headerRenderer from './headerRenderer';
import dateCellRenderer from './dateCellRenderer';
import HomePageSiderContestCalendarSaga from './actions';
import { selectData } from './selector';
import Contests from './Contests';
import './Calendar.less';

const Calendar: React.FunctionComponent<CalendarProps> = () => {
    const dispatch = useDispatch();
    const { isInitialized, contestHash } = useSelector(selectData);

    const [date, setDate] = useState(moment());

    useEffect(() => {
        dispatch(
            HomePageSiderContestCalendarSaga.init({
                month: moment().month() + 1,
                year: moment().year(),
            })
        );
        return () => {
            dispatch(HomePageSiderContestCalendarSaga.terminate());
        };
    }, []);

    const handleChange = (newDate: Moment) => {
        setDate(newDate);
    };

    return (
        <ComponentContent
            showSpinner={!isInitialized}
            className="calendar-component-content"
        >
            <AntdCalendar
                fullscreen={false}
                headerRender={headerRenderer}
                dateCellRender={(date) =>
                    dateCellRenderer({ date, data: contestHash })
                }
                value={date}
                onChange={handleChange}
                className="calendar"
            />
            <Contests date={date} />
        </ComponentContent>
    );
};

export default Calendar;
