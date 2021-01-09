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

const headerRenderer: React.FunctionComponent<CalenderHeaderProps> = ({
    value,
    type,
    onChange,
    onTypeChange,
}) => {
    const current = value.clone();
    const localeData = value.localeData();
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
    const options = _range(year, year + 2).map((i) => (
        <Select.Option key={i} value={i} className="year-item">
            {i}
        </Select.Option>
    ));
    return (
        <div className="calendar-header">
            <div className="calendar-header-left-buttons">
                <Button type="text" className="header-button">
                    <DoubleLeftOutlined />
                </Button>
                <Button type="text" className="header-button">
                    <LeftOutlined />
                </Button>
            </div>
            <div className="calendar-header-selectors">
                <Select
                    size="small"
                    dropdownMatchSelectWidth={false}
                    defaultValue={localeData.months(value)}
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
                <Button type="text" className="header-button">
                    <RightOutlined />
                </Button>
                <Button type="text" className="header-button">
                    <DoubleRightOutlined />
                </Button>
            </div>
        </div>
    );
};

export default headerRenderer;
