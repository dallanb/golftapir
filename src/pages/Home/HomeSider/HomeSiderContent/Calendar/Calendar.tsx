import React, { useEffect } from 'react';
import moment from 'moment';
import { Badge, Calendar as AntdCalendar } from 'antd';
import { CalendarProps } from './types';
import ComponentContent from '@layouts/ComponentContent';
import headerRenderer from './headerRenderer';
import dateCellRenderer from './dateCellRenderer';
import HomePageSiderContestCalendarSaga from './actions';
import { useDispatch, useSelector } from 'react-redux';
import { selectData } from './selector';
import './Calendar.less';

const Calendar: React.FunctionComponent<CalendarProps> = () => {
    const dispatch = useDispatch();
    const { isInitialized, contestHash } = useSelector(selectData);

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
            />
        </ComponentContent>
    );
};

export default Calendar;
