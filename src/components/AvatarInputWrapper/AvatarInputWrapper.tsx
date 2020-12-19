import React from 'react';
import { Form } from 'antd';
import { AvatarInputWrapperProps } from './types';
import './AvatarInputWrapper.less';

class AvatarInputWrapper extends React.PureComponent<AvatarInputWrapperProps> {
    render() {
        const { children, childRef, value, ...restProps } = this.props;
        return <Form.Item {...restProps}>{children}</Form.Item>;
    }
}

export default AvatarInputWrapper;
