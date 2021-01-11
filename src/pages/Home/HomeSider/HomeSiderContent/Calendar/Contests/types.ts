import { Moment } from 'moment';

export interface ContestsProps {
    date: Moment;
    onClick: (item: any) => void;
}
