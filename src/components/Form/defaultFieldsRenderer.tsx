import React from 'react';
import { useDispatch } from 'react-redux';
import { Input, Upload, Select, InputNumber } from 'antd';
import { Moment } from 'moment';
import { get as _get, debounce as _debounce } from 'lodash';
import { antdFormatName, mapCountryOptions } from './utils';
import { Avatar, DateTimePicker } from '@components';
import { UploadField } from './components';
import { normalizeImage, withS3URL } from '@utils';
import constants from '@constants';
// @ts-ignore
import Flags from 'country-flag-icons/react/3x2';
import { FieldsRendererProps } from './types';

const wrap = (Wrapper: any, field: any, options: any) => (
    <Wrapper key={options.name} {...options}>
        {field}
    </Wrapper>
);

const fieldRenderer = (
    formik: any,
    fieldOptions: {
        name: string;
        wrapper: any;
        type?: string;
        options?: any;
        wrapperOptions?: any;
    }
) => {
    let field;
    const {
        name,
        wrapper,
        type = 'input',
        options = {},
        wrapperOptions = {},
    } = fieldOptions;
    const formattedName = antdFormatName(name);
    const value = _get(formik, ['values', ...formattedName], null);
    const fieldRef = _get(options, ['ref'], undefined);
    const dispatch = useDispatch();
    switch (type) {
        case 'input':
            field = (
                <Input
                    key={name}
                    name={name}
                    ref={fieldRef}
                    onChange={formik.handleChange}
                    onBlur={(e) => {
                        formik.handleBlur(e);
                        formik.validateField(name);
                    }}
                    disabled={_get(options, ['disabled'], false)}
                    readOnly={_get(options, ['readonly'], false)}
                    bordered={_get(options, ['bordered'], true)}
                    placeholder={_get(options, ['placeholder'], undefined)}
                    prefix={
                        _get(options, ['prefixRenderer'], undefined) &&
                        options.prefixRenderer()
                    }
                    autoComplete="off"
                    className={_get(options, ['className'], undefined)}
                />
            );
            break;
        case 'number':
            field = (
                <InputNumber
                    key={name}
                    name={name}
                    ref={fieldRef}
                    onChange={(value) => formik.setFieldValue(name, value)}
                    onBlur={(e) => {
                        formik.handleBlur(e);
                        formik.validateField(name);
                    }}
                    readOnly={_get(options, ['readonly'], false)}
                    placeholder={_get(options, ['placeholder'], undefined)}
                    prefix={
                        _get(options, ['prefixRenderer'], undefined) &&
                        options.prefixRenderer()
                    }
                />
            );
            break;
        case 'password':
            field = (
                <Input
                    key={name}
                    name={name}
                    ref={fieldRef}
                    type="password"
                    onChange={formik.handleChange}
                    onBlur={(e) => {
                        formik.handleBlur(e);
                        formik.validateField(name);
                    }}
                    readOnly={_get(options, ['readonly'], false)}
                    bordered={!_get(options, ['readonly'], false)}
                    placeholder={_get(options, ['placeholder'], undefined)}
                    prefix={
                        _get(options, ['prefixRenderer'], undefined) &&
                        options.prefixRenderer()
                    }
                />
            );
            break;
        case 'search-select':
            //https://ant.design/components/select/#components-select-demo-select-users
            field = (
                <Select
                    key={name}
                    ref={fieldRef}
                    mode={options.mode}
                    onChange={(value) => formik.setFieldValue(name, value)}
                    onBlur={(e) => {
                        formik.handleBlur(e);
                        formik.validateField(name);
                    }}
                    showSearch
                    onSearch={_debounce((value) => {
                        dispatch(options.onSearch(value));
                    }, _get(options, ['debounce']))}
                    filterOption={false}
                    tagRender={_get(options, ['tagRenderer'], undefined)}
                >
                    {options.optionRenderer(formik)}
                </Select>
            );
            break;
        case 'upload':
            field = (
                <Upload
                    key={name}
                    name={name}
                    ref={fieldRef}
                    listType="picture-card"
                    showUploadList={false}
                    beforeUpload={(file) => {
                        normalizeImage(file).then((image) =>
                            formik.setFieldValue(name, image)
                        );
                        return false;
                    }}
                    openFileDialogOnClick={!value}
                    className={_get(options, ['className'], '')}
                >
                    <UploadField
                        formik={formik}
                        name={name}
                        value={value}
                        options={options}
                    />
                </Upload>
            );
            break;
        case 'avatar':
            field = (
                <Avatar
                    key={name}
                    name={name}
                    src={withS3URL(
                        _get(value, ['s3_filename'], ''),
                        _get(
                            options,
                            ['s3Folder'],
                            constants.S3_FOLDERS.MEMBER.AVATAR
                        )
                    )}
                    shape={_get(options, ['shape'], undefined)}
                    size={_get(options, ['size'], undefined)}
                    className={_get(options, ['className'], '')}
                />
            );
            console.log(field);
            console.log(value);
            break;
        case 'date-time-picker':
            field = (
                <DateTimePicker
                    onChange={(date: Moment | null) =>
                        formik.setFieldValue(
                            name,
                            _get(
                                options,
                                ['valueTransform'],
                                (value: Moment) => value
                            )(date)
                        )
                    }
                    onBlur={(e: any) => {
                        formik.handleBlur(e);
                        formik.validateField(name);
                    }}
                    placeholder={_get(options, ['placeholder'], '')}
                    suffixIcon={_get(options, ['suffixIcon'], undefined)}
                    format={_get(options, ['format'], 'YYYY-MM-DD HH:mm:ss')}
                    disabledDate={_get(options, ['disabledDate'], () => false)}
                    disabledTime={_get(options, ['disabledTime'], () => false)}
                    className={_get(options, ['className'], '')}
                />
            );
            break;
        case 'country-select':
            field = (
                <Select
                    key={name}
                    ref={fieldRef}
                    placeholder={_get(options, ['placeholder'], undefined)}
                    onChange={(value) => {
                        formik.setFieldValue(name, value);
                        if (_get(options, ['dependants'])) {
                            options.dependants.forEach((dependant: string) =>
                                formik.setFieldValue(dependant, value)
                            );
                        }
                    }}
                    onBlur={(e) => {
                        formik.handleBlur(e);
                        formik.validateField(name);
                    }}
                    showSearch
                    filterOption={(input, option: any) =>
                        option.children
                            .toLowerCase()
                            .indexOf(input.toLowerCase()) >= 0
                    }
                >
                    {mapCountryOptions()}
                </Select>
            );
            break;
        case 'flag':
            const Country = _get(Flags, [value], null);
            field = (
                <Country className={_get(options, ['className'], undefined)} />
            );
            break;
        default:
            throw new Error('Invalid field type');
    }

    if (wrapper) {
        const touched = _get(formik, ['touched', ...formattedName]);
        const submitted = _get(formik, ['submitCount']) > 0;
        const hasError = _get(formik, ['errors', ...formattedName]);
        const live = submitted || touched;
        const submittedError = hasError && submitted;
        const touchedError = hasError && touched;
        const help = live ? hasError || '' : '';
        field = wrap(wrapper, field, {
            name: formattedName,
            value,
            formik,
            hasFeedback: submittedError || touchedError,
            help,
            validateStatus:
                submittedError || touchedError ? 'error' : 'success',
            childRef: fieldRef,
            ...wrapperOptions,
        });
    }

    return field;
};

const defaultFieldsRenderer: FieldsRendererProps = (formik, schema) => {
    return schema.map((field: any) => {
        const fields = _get(field, ['fields'], undefined);
        if (fields) {
            return wrap(field.wrapper, defaultFieldsRenderer(formik, fields), {
                name: field.name,
                ...field.wrapperOptions,
            });
        }
        return fieldRenderer(formik, field);
    });
};
export default defaultFieldsRenderer;
