import React from 'react';
import { Input } from 'antd';
import _ from 'lodash';

const defaultFieldRenderer = (schema: any, formik: any): any => {
    const wrap = (Wrapper: any, field: any, options: any) => (
        <Wrapper key={options.name} {...options}>
            {field}
        </Wrapper>
    );

    const builder = ({
        name,
        label,
        wrapper,
        type = 'input',
        options = {},
    }: any) => {
        let field;
        switch (type) {
            case 'input':
                field = (
                    <Input
                        key={name}
                        name={name}
                        onChange={formik.handleChange}
                        readOnly={_.get(options, ['readonly'], false)}
                    />
                );
                break;
            case 'avatar':
                break;
            default:
                throw new Error('Invalid field type');
        }

        if (wrapper) {
            field = wrap(wrapper, field, { name, label });
        }

        return field;
    };

    return schema.map((field: any) => builder(field));
};
export default defaultFieldRenderer;
