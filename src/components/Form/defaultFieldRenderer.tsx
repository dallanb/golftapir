import React from 'react';
import { Input } from 'antd';

const defaultFieldRenderer = (schema: any, formik: any): any => {
    const builder = ({ name, type = 'input', options = {} }: any) => {
        let field;
        switch (type) {
            case 'input':
                field = <Input key={name} name={name} />;
                break;
            case 'avatar':
                break;
            default:
                throw new Error('Invalid field type');
        }
        return field;
    };

    return schema.map((field: any) => builder(field));
};
export default defaultFieldRenderer;
