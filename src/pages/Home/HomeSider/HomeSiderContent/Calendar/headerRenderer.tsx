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
        console.log(value);
        return (
            <Select.Option className="month-item" key={i} value={value}>
                {value}
            </Select.Option>
        );
    });
    const month = value.month();
    console.log(month);

    const year = value.year();
    const options = _range(year - 10, year + 10).map((i) => (
        <Select.Option key={i} value={i} className="year-item">
            {i}
        </Select.Option>
    ));

    return (
        <div style={{ padding: 8 }}>
            <Typography.Title level={4}>Custom header</Typography.Title>
            <Row gutter={8}>
                <Col>
                    <Radio.Group
                        size="small"
                        onChange={(e) => onTypeChange(e.target.value)}
                        value={type}
                    >
                        <Radio.Button value="month">Month</Radio.Button>
                        <Radio.Button value="year">Year</Radio.Button>
                    </Radio.Group>
                </Col>
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
                        value={String(month)}
                        onChange={(selectedMonth) => {
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
