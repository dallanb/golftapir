import React from 'react';
import { useSelector } from 'react-redux';
import { ContestInfoFormProps } from './types';
import { Form } from '@components';
import { fieldSchema, validationSchema } from './schema';
import { prepareInitialValues } from '../utils';
import { selectContest } from '@pages/Contest/selector';
import './ContestInfoForm.less';

const ContestInfoForm: React.FunctionComponent<ContestInfoFormProps> = () => {
    const contestData = useSelector(selectContest);
    const initialValues = prepareInitialValues(contestData);
    return (
        <div className="contest-info-form">
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

export default ContestInfoForm;
