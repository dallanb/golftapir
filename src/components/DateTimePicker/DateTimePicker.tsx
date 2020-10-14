import React from 'react';
import moment from 'moment';
import { DatePicker } from 'antd';
import { DateTimePickerProps } from './types';
import './DateTimePicker.scss';

const DateTimePicker: React.FunctionComponent<DateTimePickerProps> = (
    props
) => {
    return (
        <DatePicker
            {...props}
            showTime={{ defaultValue: moment('00:00:00', 'HH:mm:ss') }}
        />
    );
};

export default DateTimePicker;
