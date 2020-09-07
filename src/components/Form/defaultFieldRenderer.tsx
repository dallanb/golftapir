import React from 'react';
import { Input, Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons/lib';
import _ from 'lodash';

const defaultFieldRenderer = (schema: any, formik: any): any => {
    const wrap = (Wrapper: any, field: any, options: any) => (
        <Wrapper key={options.name} {...options}>
            {field}
        </Wrapper>
    );

    const builder = ({
        name,
        wrapper,
        type = 'input',
        options = {},
        wrapperOptions = {},
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
                field = (
                    <Upload
                        key={name}
                        name={name}
                        onChange={(info) => {
                            formik.setFieldValue(
                                'avatar',
                                info.file.originFileObj
                            );
                        }}
                    >
                        <Button icon={<UploadOutlined />}>Upload</Button>
                    </Upload>
                );
                break;
            default:
                throw new Error('Invalid field type');
        }

        if (wrapper) {
            field = wrap(wrapper, field, { name, ...wrapperOptions });
        }

        return field;
    };

    return schema.map((field: any) => builder(field));
};
export default defaultFieldRenderer;
