import React from 'react';
import { Input, Upload, Button, Select } from 'antd';
import { UploadOutlined } from '@ant-design/icons/lib';
import _ from 'lodash';
import { antdFormatName, mapCountryOptions } from './utils';

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
                            formik.setFieldValue(name, info.file.originFileObj);
                        }}
                    >
                        <Button icon={<UploadOutlined />}>Upload</Button>
                    </Upload>
                );
                break;
            case 'country-select':
                field = (
                    <Select
                        key={name}
                        onChange={(value) => {
                            formik.setFieldValue(name, value);
                            if (_.get(options, ['dependants'])) {
                                options.dependants.forEach(
                                    (dependant: string) =>
                                        formik.setFieldValue(dependant, value)
                                );
                            }
                        }}
                    >
                        {mapCountryOptions()}
                    </Select>
                );
                break;
            default:
                throw new Error('Invalid field type');
        }

        if (wrapper) {
            const touched = formik.touched[name];
            const submitted = formik.submitCount > 0;
            const hasError = formik.errors[name];
            const submittedError = hasError && submitted;
            const touchedError = hasError && touched;

            field = wrap(wrapper, field, {
                name: antdFormatName(name),
                hasFeedback: submittedError || touchedError,
                help: touched ? hasError : '',
                validateStatus:
                    submittedError || touchedError ? 'error' : 'success',
                ...wrapperOptions,
            });
        }

        return field;
    };

    return schema.map((field: any) => builder(field));
};
export default defaultFieldRenderer;
