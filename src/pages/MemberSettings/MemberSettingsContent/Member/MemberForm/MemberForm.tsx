import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormikValues } from 'formik';
import { get as _get, pick as _pick } from 'lodash';
import { MemberSettingsFormProps } from './types';
import { Form } from '@components';
import MemberSettingsPageContentMemberActions from '../actions';
import { fieldSchema, validationSchema } from './schema';
import { selectData as selectMemberFormData } from '../selector';
import './MemberForm.less';

const MemberSettingsForm: React.FunctionComponent<MemberSettingsFormProps> = () => {
    const dispatch = useDispatch();
    const { initialValues } = useSelector(selectMemberFormData);

    const handleSubmit = (values: FormikValues) => {
        const uuid = _get(values, ['uuid'], undefined);
        const member = _pick(values, ['display_name', 'avatar']);
        dispatch(MemberSettingsPageContentMemberActions.submit(uuid, member));
    };
    return (
        <div className="member-form">
            <Form
                fieldSchema={fieldSchema}
                validationSchema={validationSchema}
                initialValues={initialValues}
                onSubmit={handleSubmit}
            />
        </div>
    );
};

export default MemberSettingsForm;
