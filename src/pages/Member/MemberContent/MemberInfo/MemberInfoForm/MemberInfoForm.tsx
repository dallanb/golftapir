import React from 'react';
import { useSelector } from 'react-redux';
import { MemberInfoFormProps } from './types';
import { Form } from '@components';
import { fieldSchema, validationSchema } from './schema';
import { selectData } from '../selector';
import '@pages/Home/HomeContent/MemberInfo/MemberInfoForm/MemberInfoForm.less';

const MemberInfoForm: React.FunctionComponent<MemberInfoFormProps> = () => {
    const { initialValues } = useSelector(selectData);
    return (
        <div className="member-info-form">
            <Form
                fieldSchema={fieldSchema}
                validationSchema={validationSchema}
                initialValues={initialValues}
                onSubmit={() => null}
                submitButton={null}
            />
        </div>
    );
};

export default MemberInfoForm;
