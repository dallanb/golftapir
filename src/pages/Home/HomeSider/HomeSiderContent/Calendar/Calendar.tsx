import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import moment, { Moment } from 'moment';
import { Badge, Calendar as AntdCalendar } from 'antd';
import { CalendarProps } from './types';
import ComponentContent from '@layouts/ComponentContent';
import headerRenderer from './headerRenderer';
import dateCellRenderer from './dateCellRenderer';
import HomePageSiderContestCalendarSaga from './actions';
import { selectData } from './selector';
import Contests from './Contests';
import { withAppRoute } from '@utils';
import routes from '@constants/routes';
import './Calendar.less';

const Calendar: React.FunctionComponent<CalendarProps> = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { isInitialized, isFetching, contestHash } = useSelector(selectData);

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
        const currMonth = date.month();
        const newMonth = newDate.month();
        const currYear = date.year();
        const newYear = newDate.year();
        if (currMonth !== newMonth || currYear !== newYear) {
            dispatch(
                HomePageSiderContestCalendarSaga.fetchData({
                    month: newMonth + 1,
                    year: newYear,
                })
            );
        }
        setDate(newDate);
    };

    const handleContestClick = (contest: any) => {
        history.push(
            withAppRoute(routes.ROUTES.CONTEST.ROUTE, {
                routeProps: {
                    contest_uuid: contest.uuid,
                    league_uuid: contest.league_uuid,
                },
            }),
            contest
        );
    };

    return (
        <ComponentContent
            showSpinner={!isInitialized || isFetching}
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
            <Contests date={date} onClick={handleContestClick} />
        </ComponentContent>
    );
};

export default Calendar;
