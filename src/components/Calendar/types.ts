import { Moment } from 'moment';

export interface CalendarProps {
    date: Moment;
    data: any;
    onChange: any;
    onListItemClick: any;
    headerRenderer?: any;
    dateCellRenderer?: any;
}
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
