import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormikValues } from 'formik';
import { pick as _pick } from 'lodash';
import { MemberFormProps } from './types';
import { Form } from '@components';
import MembersCreatePageContentMemberActions from '../actions';
import { fieldSchema, validationSchema } from './schema';
import { selectData as selectMemberFormData } from '../selector';
import './MemberForm.less';

const MemberForm: React.FunctionComponent<MemberFormProps> = () => {
    const dispatch = useDispatch();
    const { initialValues } = useSelector(selectMemberFormData);

    const handleSubmit = (values: FormikValues) => {
        const member = _pick(values, ['league_uuid', 'email']);
        dispatch(MembersCreatePageContentMemberActions.submit(member));
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

export default MemberForm;
