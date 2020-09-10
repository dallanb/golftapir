import React from 'react';
import { Input, Upload, Button, Select } from 'antd';
import { UploadOutlined } from '@ant-design/icons/lib';
import _ from 'lodash';
import { antdFormatName, mapCountryOptions } from './utils';
import { FieldRendererProps } from './types';
import { useDispatch, useSelector } from 'react-redux';

let defaultFieldRenderer: FieldRendererProps;

defaultFieldRenderer = (schema, formik) => {
    const wrap = (Wrapper: any, field: any, options: any) => (
        <Wrapper key={options.name} {...options}>
            {field}
        </Wrapper>
    );

    const Builder = ({
        name,
        wrapper,
        type = 'input',
        options = {},
        wrapperOptions = {},
    }: any) => {
        let field;
        const fieldRef = _.get(options, ['ref'], undefined);
        const dispatch = useDispatch();

        switch (type) {
            case 'input':
                field = (
                    <Input
                        key={name}
                        name={name}
                        ref={fieldRef}
                        onChange={formik.handleChange}
                        readOnly={_.get(options, ['readonly'], false)}
                        bordered={!_.get(options, ['readonly'], false)}
                    />
                );
                break;
            case 'search':
                field = (
                    <Select
                        key={name}
                        ref={fieldRef}
                        onChange={(value) => {
                            formik.setFieldValue(name, value);
                        }}
                        showSearch
                        onSearch={(value) => {
                            dispatch(options.onSearch(value));
                        }}
                    >
                        {useSelector(select)}
                    </Select>
                );
                break;
            case 'avatar':
                field = (
                    <Upload
                        key={name}
                        name={name}
                        ref={fieldRef}
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
                        ref={fieldRef}
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
                help: hasError || '',
                validateStatus:
                    submittedError || touchedError ? 'error' : 'success',
                childRef: fieldRef,
                ...wrapperOptions,
            });
        }

        return field;
    };

    return schema.map((field: any) => Builder(field));
};
export default defaultFieldRenderer;
