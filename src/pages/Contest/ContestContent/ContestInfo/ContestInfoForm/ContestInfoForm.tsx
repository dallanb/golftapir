import React from 'react';
import { useSelector } from 'react-redux';
import { ContestInfoFormProps } from './types';
import { Form } from '@components';
import { fieldSchema, validationSchema } from './schema';
import { prepareInitialValues } from '../utils';
import { selectPayoutData } from '@pages/Contest/selector';
import { selectContest } from '@modules/Contest/selector';
import './ContestInfoForm.less';

const ContestInfoForm: React.FunctionComponent<ContestInfoFormProps> = () => {
    const contestData = useSelector(selectContest);
    const payoutData = useSelector(selectPayoutData);
    const initialValues = prepareInitialValues(contestData, payoutData);
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
