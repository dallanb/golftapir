import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormikValues } from 'formik';
import { isEqual as _isEqual, set as _set } from 'lodash';
import { ContestFormProps } from './types';
import { Form } from '@components';
import ContestUpdatePageContentContestActions from '../actions';
import { fieldSchema, validationSchema } from './schema';
import { selectData as selectContestFormData } from '../selector';
import './ContestForm.scss';

const ContestForm: React.FunctionComponent<ContestFormProps> = () => {
    const dispatch = useDispatch();
    const { initialValues } = useSelector(selectContestFormData);

    const handleSubmit = (values: FormikValues) => {
        const contest = Object.entries(values).reduce(
            (accum: any, [key, value]: any) =>
                !_isEqual(value, initialValues[key])
                    ? _set(accum, [key], value)
                    : accum,
            {}
        );
        dispatch(ContestUpdatePageContentContestActions.submit(contest));
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
