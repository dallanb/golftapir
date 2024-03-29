import React from 'react';
import { Form } from 'antd';
import ImgCrop from 'antd-img-crop';
import { validateUploadImage } from "@utils";
import { ImgCropWrapperProps } from './types';
import './ImgCropWrapper.less';

class ImgCropWrapper extends React.PureComponent<ImgCropWrapperProps> {
    render() {
        const {
            children,
            childRef,
            value,
            modalTitle,
            ...restProps
        } = this.props;
        return (
            <Form.Item {...restProps}>
                <ImgCrop rotate modalTitle={modalTitle} beforeCrop={validateUploadImage}>
                    {children}
                </ImgCrop>
            </Form.Item>
        );
    }
}

export default ImgCropWrapper;
