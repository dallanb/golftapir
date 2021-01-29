import React from 'react';
import { useSelector } from 'react-redux';
import { MemberInfoFormProps } from './types';
import { Form } from '@components';
import { fieldSchema, validationSchema } from './schema';
import { selectMeData } from '@selectors/BaseSelector';
import './MemberInfoForm.less';
import { prepareInitialValues } from '../utils';

const MemberInfoForm: React.FunctionComponent<MemberInfoFormProps> = () => {
    const me = useSelector(selectMeData);
    const initialValues = prepareInitialValues(me);
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
