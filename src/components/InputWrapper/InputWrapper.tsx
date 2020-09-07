import React from 'react';
import { Form } from 'antd';
import { InputWrapperProps } from './types';
import './InputWrapper.scss';

class InputWrapper extends React.PureComponent<InputWrapperProps> {
    render() {
        const { children, ...restProps } = this.props;
        return <Form.Item {...restProps}>{children}</Form.Item>;
    }
}

export default InputWrapper;
