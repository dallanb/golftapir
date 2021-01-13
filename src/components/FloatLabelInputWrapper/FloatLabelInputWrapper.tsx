import React, { useState } from 'react';
import classnames from 'classnames';
import { FloatLabelInputWrapperProps } from './types';
import './FloatLabelInputWrapper.less';
import { Form } from 'antd';

const FloatLabelInputWrapper: React.FunctionComponent<FloatLabelInputWrapperProps> = (
    props
) => {
    const {
        children,
        childRef,
        label,
        value,
        name,
        className,
        ...restProps
    } = props;

    const [focus, setFocus] = useState(false);
    const cx = classnames('float-label-input-wrapper', className);
    const labelCx = classnames('label', {
        'label-float': focus || (value && value.length !== 0),
    });
    return (
        <div
            className={cx}
            onBlur={() => setFocus(false)}
            onFocus={() => setFocus(true)}
        >
            <Form.Item {...restProps}>
                <Form.Item noStyle name={name}>
                    {children}
                </Form.Item>
                <label className={labelCx}>{label}</label>
            </Form.Item>
        </div>
    );
};

export default FloatLabelInputWrapper;
