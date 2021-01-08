import React from 'react';
import { Col, Radio, Row, Select, Typography } from 'antd';
import { CalenderHeaderProps } from './types';
import { range as _range } from 'lodash';

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
        const value = localeData.monthsShort(current);
        return (
            <Select.Option className="month-item" key={i} value={i}>
                {value}
            </Select.Option>
        );
    });
    const month = value.month();

    const year = value.year();
    const options = _range(year - 10, year + 10).map((i) => (
        <Select.Option key={i} value={i} className="year-item">
            {i}
        </Select.Option>
    ));
    return (
        <div style={{ padding: 8 }}>
            <Row gutter={8}>
                <Col>
                    <Select
                        size="small"
                        dropdownMatchSelectWidth={false}
                        className="my-year-select"
                        onChange={(newYear) => {
                            const now = value.clone().year(newYear);
                            onChange(now);
                        }}
                        value={String(year)}
                    >
                        {options}
                    </Select>
                </Col>
                <Col>
                    <Select
                        size="small"
                        dropdownMatchSelectWidth={false}
                        defaultValue={localeData.monthsShort(value)}
                        onChange={(selectedMonth) => {
                            console.log(selectedMonth);
                            const newValue = value.clone();
                            newValue.month(parseInt(selectedMonth, 10));
                            onChange(newValue);
                        }}
                    >
                        {monthOptions}
                    </Select>
                </Col>
            </Row>
        </div>
    );
};

export default headerRenderer;
