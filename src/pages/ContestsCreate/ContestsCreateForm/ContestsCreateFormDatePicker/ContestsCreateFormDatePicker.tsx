import React from 'react';
import moment, { Moment } from 'moment';
import { range as _range } from 'lodash';
import { ContestCreateFormDatePickerProps } from './types';
import { DateTimePicker } from '@components';
import './ContestsCreateFormDatePicker.scss';

class ContestsCreateFormDatePicker extends React.PureComponent<
    ContestCreateFormDatePickerProps
> {
    // disabledDate =
    //
    // disabledDateTime =
    //
    // render() {
    //     return (
    //         <DateTimePicker
    //             format="YYYY-MM-DD HH:mm:ss"
    //             disabledDate={this.disabledDate}
    //             disabledTime={this.disabledDateTime}
    //         />
    //     );
    // }
}

export default ContestsCreateFormDatePicker;
