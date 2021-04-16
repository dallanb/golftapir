import React from 'react';
import moment from 'moment';
import { DatePicker } from 'antd';
import { DateTimePickerProps } from './types';
import './DateTimePicker.less';

const DateTimePicker: React.FunctionComponent<DateTimePickerProps> = ({
    value: rawValue,
    ...props
}) => {
    const value = rawValue ? moment(rawValue) : undefined;
    return (
        <DatePicker
            {...props}
            showNow={false}
            value={value}
            showTime={{ defaultValue: moment('00:00:00', 'HH:mm:ss') }}
        />
    );
};

export default DateTimePicker;
