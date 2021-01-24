import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormikValues } from 'formik';
import { pick as _pick } from 'lodash';
import { LeagueFormProps } from './types';
import { Form } from '@components';
import LeaguesCreatePageContentLeagueActions from '../actions';
import { fieldSchema, validationSchema } from './schema';
import { selectData as selectLeagueFormData } from '../selector';
import './LeagueForm.less';

const LeagueForm: React.FunctionComponent<LeagueFormProps> = () => {
    const dispatch = useDispatch();
    const { initialValues } = useSelector(selectLeagueFormData);

    const handleSubmit = (values: FormikValues) => {
        const league = _pick(values, ['name', 'avatar']);
        dispatch(LeaguesCreatePageContentLeagueActions.submit(league));
    };
    return (
        <div className="league-form">
            <Form
                fieldSchema={fieldSchema}
                validationSchema={validationSchema}
                initialValues={initialValues}
                onSubmit={handleSubmit}
            />
        </div>
    );
};

export default LeagueForm;
