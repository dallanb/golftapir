import React from 'react';
import { AccountFormProps } from './types';
import { Form } from '../../../components';
import './AccountForm.scss';
import {fieldSchema, validationSchema} from "./schema";

class AccountForm extends React.PureComponent<AccountFormProps> {
    render() {
        return <Form
            fieldSchema={fieldSchema}
            validationSchema={validationSchema}
            initialValues={}
        />;
    }
}

export default AccountForm;
