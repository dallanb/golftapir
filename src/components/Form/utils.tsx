import React from 'react';
import { countries } from 'countries-list';
import { Select } from 'antd';

export const mapCountryOptions = () =>
    Object.entries(countries).map(([key, country]) => (
        <Select.Option key={key} value={key}>
            {country.name}
        </Select.Option>
    ));
