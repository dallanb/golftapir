import React from 'react';
import { Form } from 'antd';

const defaultFormRenderer = (
    fields: any,
    handleSubmit: any,
    SubmitComponent: JSX.Element
): JSX.Element => (
    <Form onFinish={handleSubmit}>
        {fields}
        {SubmitComponent}
    </Form>
);

export default defaultFormRenderer;
