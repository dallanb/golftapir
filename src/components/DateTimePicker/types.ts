import { Moment } from 'moment';
import {ReactNode} from "react";

export interface DateTimePickerProps {
    value?: Moment | string;
    format: string;
    disabledDate?: (currentDate: Moment) => boolean;
    disabledTime?: any;
    placeholder?: string;
    suffixIcon?: ReactNode;
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
