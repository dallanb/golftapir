import React from 'react';
import { Form } from 'antd';
import { BasicInputWrapperProps } from './types';
import './BasicInputWrapper.less';

class BasicInputWrapper extends React.PureComponent<BasicInputWrapperProps> {
    render() {
        const { children, childRef, value, ...restProps } = this.props;
        return <Form.Item {...restProps}>{children}</Form.Item>;
    }
}

export default BasicInputWrapper;
