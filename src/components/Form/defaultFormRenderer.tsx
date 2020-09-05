import React from 'react';
import { Form } from 'antd';

const defaultFormRenderer = (
    initialValues: any,
    fields: any,
    handleSubmit: any,
    SubmitComponent: JSX.Element
): JSX.Element => (
    <Form initialValues={initialValues} onFinish={handleSubmit}>
        {fields}
        {SubmitComponent}
    </Form>
);

export default defaultFormRenderer;
