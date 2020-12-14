import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormikValues } from 'formik';
import { pick as _pick } from 'lodash';
import { ContestFormProps } from './types';
import { Form } from '@components';
import ContestsCreatePageContentContestActions from '../actions';
import { fieldSchema, validationSchema } from './schema';
import { selectData as selectContestFormData } from '../selector';
import './ContestForm.less';

const ContestForm: React.FunctionComponent<ContestFormProps> = () => {
    const dispatch = useDispatch();
    const { initialValues } = useSelector(selectContestFormData);

    const handleSubmit = (values: FormikValues) => {
        const contest = _pick(values, [
            'sport_uuid',
            'location_uuid',
            'name',
            'avatar',
            'start_time',
            'participants',
        ]);
        dispatch(ContestsCreatePageContentContestActions.submit(contest));
    };
    return (
        <div className="contest-form">
            <Form
                fieldSchema={fieldSchema}
                validationSchema={validationSchema}
                initialValues={initialValues}
                onSubmit={handleSubmit}
            />
        </div>
    );
};

export default ContestForm;
