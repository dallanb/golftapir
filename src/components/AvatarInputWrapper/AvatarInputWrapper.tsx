import React from 'react';
import { Form } from 'antd';
import { Avatar } from '@components';
import { AvatarInputWrapperProps } from './types';
import './AvatarInputWrapper.less';

class AvatarInputWrapper extends React.PureComponent<AvatarInputWrapperProps> {
    render() {
        const {
            children,
            childRef,
            value,
            name,
            valuePropName,
            ...restProps
        } = this.props;
        return (
            <Form.Item {...restProps}>
                <Avatar shape="square" size={128} src={value} name="Baby D" />
                <Form.Item noStyle name={name} valuePropName={valuePropName}>
                    {children}
                </Form.Item>
            </Form.Item>
        );
    }
}

export default AvatarInputWrapper;
