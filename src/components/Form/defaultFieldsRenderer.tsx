import React from 'react';
import { useDispatch } from 'react-redux';
import { Input, Upload, Select, InputNumber, Button } from 'antd';
import { Moment } from 'moment';
import {
    get as _get,
    debounce as _debounce,
    isEmpty as _isEmpty,
} from 'lodash';
import { antdFormatName, mapCountryOptions } from './utils';
import { Avatar, DateTimePicker } from '@components';
import { UploadField } from './components';
import { normalizeImage, withS3URL } from '@utils';
import constants from '@constants';
// @ts-ignore
import Flags from 'country-flag-icons/react/3x2';
import { FieldsRendererProps } from './types';
import { Field, FieldArray } from 'formik';

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

    // wrapper props
    const touched = _get(formik, ['touched', ...formattedName]);
    const submitted = _get(formik, ['submitCount']) > 0;
    const hasError = _get(formik, ['errors', ...formattedName]);
    const live = submitted || touched;
    const submittedError = hasError && submitted;
    const touchedError = hasError && touched;
    const help = live ? hasError || '' : '';
    const wrapperProps = {
        name: formattedName,
        value,
        formik,
        hasFeedback: submittedError || touchedError,
        help,
        validateStatus: submittedError || touchedError ? 'error' : 'success',
        childRef: fieldRef,
        ...wrapperOptions,
    };
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
                        options.prefixRenderer(formik, { name, value })
                    }
                    autoComplete="off"
                    className={_get(options, ['className'], undefined)}
                />
            );
            if (wrapper) {
                field = wrap(wrapper, field, wrapperProps);
            }
            break;
        case 'number':
            field = (
                <InputNumber
                    key={name}
                    name={name}
                    ref={fieldRef}
                    onChange={(value) => {
                        value =
                            typeof value === 'string' ? parseInt(value) : value;
                        return formik.setFieldValue(name, value);
                    }}
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
                    className={_get(options, ['className'], undefined)}
                    formatter={_get(options, ['formatter'], undefined)}
                    parser={_get(options, ['parser'], undefined)}
                    max={_get(options, ['max'], undefined)}
                    min={_get(options, ['min'], undefined)}
                />
            );

            if (wrapper) {
                field = wrap(wrapper, field, wrapperProps);
            }
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

            if (wrapper) {
                field = wrap(wrapper, field, wrapperProps);
            }
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

            if (wrapper) {
                field = wrap(wrapper, field, wrapperProps);
            }
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
                    openFileDialogOnClick={!value || _isEmpty(value)}
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

            if (wrapper) {
                field = wrap(wrapper, field, wrapperProps);
            }
            break;
        case 'avatar':
            field = (
                <Avatar
                    key={name}
                    name={_get(
                        formik,
                        [
                            'values',
                            ...antdFormatName(_get(options, ['avatarNameKey'])),
                        ],
                        null
                    )}
                    src={withS3URL(
                        value,
                        _get(
                            options,
                            ['s3Folder'],
                            constants.S3_FOLDERS.MEMBER.AVATAR
                        ),
                        new Date().getTime()
                    )}
                    shape={_get(options, ['shape'], undefined)}
                    size={_get(options, ['size'], undefined)}
                    className={_get(options, ['className'], '')}
                />
            );

            if (wrapper) {
                field = wrap(wrapper, field, wrapperProps);
            }
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

            if (wrapper) {
                field = wrap(wrapper, field, wrapperProps);
            }
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

            if (wrapper) {
                field = wrap(wrapper, field, wrapperProps);
            }
            break;
        case 'dynamic-input':
            field = (
                <FieldArray
                    name={name}
                    key={name}
                    render={(arrayHelpers: any) => (
                        <div
                            className={_get(options, ['className'], undefined)}
                        >
                            {value.map((item: any, index: number) => (
                                <Field
                                    name={`${name}.${index}`}
                                    key={`${name}.${index}`}
                                >
                                    {({ field, form, meta }: any) =>
                                        fieldRenderer(formik, {
                                            name: field.name,
                                            type: _get(
                                                options,
                                                ['fieldType'],
                                                undefined
                                            ),
                                            wrapper: _get(
                                                options,
                                                ['fieldWrapper'],
                                                undefined
                                            ),
                                            options: _get(
                                                options,
                                                ['fieldOptions'],
                                                undefined
                                            ),
                                            wrapperOptions: _get(
                                                options,
                                                ['fieldWrapperOptions'],
                                                undefined
                                            ),
                                        })
                                    }
                                </Field>
                            ))}
                            {_get(
                                options,
                                ['buttonsRenderer'],
                                (props: any) => null
                            )({ value, formik, arrayHelpers })}
                        </div>
                    )}
                />
            );
            break;
        case 'flag':
            const Country = _get(Flags, [value], null);
            field = (
                <Country className={_get(options, ['className'], undefined)} />
            );

            if (wrapper) {
                field = wrap(wrapper, field, wrapperProps);
            }
            break;
        default:
            throw new Error('Invalid field type');
    }

    return field;
};

const defaultFieldsRenderer: FieldsRendererProps = (formik, schema) => {
    console.log(formik);
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
