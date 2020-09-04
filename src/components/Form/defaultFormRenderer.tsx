import React from 'react';
import { Form } from 'antd';

const defaultFormRenderer = (fields: any, submit: JSX.Element): JSX.Element => (
    <Form>
        {fields}
        {submit}
    </Form>
);

export default defaultFormRenderer;
