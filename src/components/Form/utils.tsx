import React from 'react';
import { countries } from 'countries-list';
import { Select } from 'antd';

export const mapCountryOptions = (): JSX.Element[] =>
    Object.entries(countries).map(([key, country]) => (
        <Select.Option key={key} value={key}>
            {country.name}
        </Select.Option>
    ));

// AntD requires that we format nested values like this ['foo', 0, 'bar'] instead of 'foo.0.bar' so we will normalize that here
export const antdFormatName = (name: string): string[] => name.split('.');
