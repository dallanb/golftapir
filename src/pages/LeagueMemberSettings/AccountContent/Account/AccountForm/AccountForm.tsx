import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormikValues } from 'formik';
import { pick as _pick } from 'lodash';
import { LeagueMemberSettingsFormProps } from './types';
import { Form } from '@components';
import LeagueMemberSettingsPageContentLeagueMemberSettingsActions from '../actions';
import { fieldSchema, validationSchema } from './schema';
import { selectData as selectLeagueMemberSettingsFormData } from '../selector';
import './LeagueMemberSettingsForm.less';

const LeagueMemberSettingsForm: React.FunctionComponent<LeagueMemberSettingsFormProps> = () => {
    const dispatch = useDispatch();
    const { initialValues } = useSelector(selectLeagueMemberSettingsFormData);

    const handleSubmit = (values: FormikValues) => {
        const account = _pick(values, ['display_name', 'address', 'avatar']);
        dispatch(
            LeagueMemberSettingsPageContentLeagueMemberSettingsActions.submit(
                account
            )
        );
    };
    return (
        <div className="account-form">
            <Form
                fieldSchema={fieldSchema}
                validationSchema={validationSchema}
                initialValues={initialValues}
                onSubmit={handleSubmit}
            />
        </div>
    );
};

export default LeagueMemberSettingsForm;
