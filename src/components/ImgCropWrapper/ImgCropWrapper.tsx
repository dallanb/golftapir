import React from 'react';
import { Form } from 'antd';
import ImgCrop from 'antd-img-crop';
import { ImgCropWrapperProps } from './types';
import './ImgCropWrapper.less';

class ImgCropWrapper extends React.PureComponent<ImgCropWrapperProps> {
    render() {
        const { children, childRef, value, ...restProps } = this.props;
        return (
            <Form.Item {...restProps}>
                <ImgCrop rotate>{children}</ImgCrop>
            </Form.Item>
        );
    }
}

export default ImgCropWrapper;
