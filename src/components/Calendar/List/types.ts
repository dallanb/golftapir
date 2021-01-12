import { Moment } from 'moment';

export interface ContestsProps {
    data: any;
    date: Moment;
    onClick: (item: any) => void;
}
