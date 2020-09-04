import React from 'react';
import { Input } from 'antd';

const defaultFieldRenderer = (schema: any): any =>
    schema.map(({ name, type = 'input', options = {} }: any) => {
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
    });

export default defaultFieldRenderer;
