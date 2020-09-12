import React from 'react';
import { Form } from 'antd';
import { SearchWrapperProps } from './types';
import './SearchWrapper.scss';

const SearchWrapper = ({
    children,
    formik,
    childRef,
    ...restProps
}: SearchWrapperProps) => <Form.Item {...restProps}>{children}</Form.Item>;

export default SearchWrapper;
