import React from 'react';
import { range as _range } from 'lodash';
import {
    DoubleLeftOutlined,
    DoubleRightOutlined,
    LeftOutlined,
    RightOutlined,
} from '@ant-design/icons/lib';
import { Button, Select } from 'antd';
import { CalenderHeaderProps } from './types';
import moment, { Moment } from 'moment';

const defaultHeaderRenderer: React.FunctionComponent<CalenderHeaderProps> = ({
    value,
    type,
    onChange,
    onTypeChange,
}) => {
    const current = value.clone();
    const localeData = value.localeData();
    const minYear = moment().year();
    const maxYear = moment().year() + 2;
    const monthOptions = _range(0, 12).map((i) => {
        current.month(i);
        const value = localeData.months(current);
        return (
            <Select.Option className="month-item" key={i} value={i}>
                {value}
            </Select.Option>
        );
    });
    const month = value.month();

    const year = value.year();
    const options = _range(minYear, maxYear).map((i) => (
        <Select.Option key={i} value={i} className="year-item">
            {i}
        </Select.Option>
    ));

    const handleHeaderClick = (key: string, val: Moment) => {
        const valClone = value.clone();
        switch (key) {
            case 'left':
                onChange(valClone.subtract(1, 'months'));
                break;
            case 'doubleLeft':
                onChange(valClone.subtract(1, 'years'));
                break;
            case 'right':
                onChange(valClone.add(1, 'months'));
                break;
            case 'doubleRight':
                onChange(valClone.add(1, 'years'));
                break;
        }
    };

    return (
        <div className="calendar-header">
            <div className="calendar-header-left-buttons">
                <Button
                    type="text"
                    onClick={() => handleHeaderClick('doubleLeft', value)}
                    disabled={minYear === value.year()}
                    className="header-button"
                >
                    <DoubleLeftOutlined />
                </Button>
                <Button
                    type="text"
                    onClick={() => handleHeaderClick('left', value)}
                    disabled={minYear === year && month === 0}
                    className="header-button"
                >
                    <LeftOutlined />
                </Button>
            </div>
            <div className="calendar-header-selectors">
                <Select
                    size="small"
                    dropdownMatchSelectWidth={false}
                    value={localeData.months(value)}
                    onChange={(selectedMonth) => {
                        const newValue = value.clone();
                        newValue.month(parseInt(selectedMonth, 10));
                        onChange(newValue);
                    }}
                    bordered={false}
                    showArrow={false}
                >
                    {monthOptions}
                </Select>
                <Select
                    size="small"
                    dropdownMatchSelectWidth={false}
                    className="my-year-select"
                    onChange={(newYear) => {
                        const now = value.clone().year(newYear);
                        onChange(now);
                    }}
                    value={String(year)}
                    bordered={false}
                    showArrow={false}
                >
                    {options}
                </Select>
            </div>
            <div className="calendar-header-right-buttons">
                <Button
                    type="text"
                    disabled={maxYear - 1 === year && month === 11}
                    onClick={() => handleHeaderClick('right', value)}
                    className="header-button"
                >
                    <RightOutlined />
                </Button>
                <Button
                    type="text"
                    disabled={maxYear - 1 === year}
                    onClick={() => handleHeaderClick('doubleRight', value)}
                    className="header-button"
                >
                    <DoubleRightOutlined />
                </Button>
            </div>
        </div>
    );
};

export default defaultHeaderRenderer;
