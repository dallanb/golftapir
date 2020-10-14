import { Moment } from 'moment';

export interface DateTimePickerProps {
    value?: Moment | string;
    format: string;
    disabledDate?: (currentDate: Moment) => boolean;
    disabledTime?: any;
    onChange: (value: Moment | null, dateString: string) => void;
    // disabledTime?: {
    //     disabledHours?: () => boolean;
    //     disabledMinutes?: (selectedHour: Moment) => boolean;
    //     disabledSeconds?: (
    //         selectedHour: Moment,
    //         selectMinute: Moment
    //     ) => boolean;
    // };
}
