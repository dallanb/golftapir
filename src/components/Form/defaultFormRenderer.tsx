import React from 'react';
import { Form } from 'antd';
import { FormRendererProps } from './types';

let defaultFormRenderer: FormRendererProps;

defaultFormRenderer = (
    initialValues,
    fields,
    handleSubmit,
    SubmitComponent
) => (
    <Form initialValues={initialValues} onFinish={handleSubmit}>
        {fields}
        {SubmitComponent}
    </Form>
);

export default defaultFormRenderer;
