import React from 'react';
import { Select } from 'antd';
import { get as _get } from 'lodash';
import { MemberTile } from '@components';

const optionRenderer = (d: any, index: number) => (
    <Select.Option key={index} value={index}>
        <MemberTile
            member={Object.assign({}, d, {
                avatar: _get(d, ['avatar', 's3_filename']),
            })}
        />
    </Select.Option>
);
export default optionRenderer;
