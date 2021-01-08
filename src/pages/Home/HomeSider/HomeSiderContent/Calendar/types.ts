import { Moment } from 'moment';

export interface HomePageSiderContentCalendarInterface {
    isFetching: boolean;
    isInitialized: boolean;
    err: any;
    data: any;
    metadata: any;
    append: boolean;
    options: any;
    contestHash: any;
}
export interface CalendarProps {}
export interface CalenderHeaderProps {
    value: any;
    type: any;
    onChange: any;
    onTypeChange: any;
}

export interface CalendarCellProps {
    date: any;
    data: any;
}
