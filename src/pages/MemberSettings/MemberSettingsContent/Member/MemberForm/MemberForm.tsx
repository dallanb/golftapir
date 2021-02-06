import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormikValues } from 'formik';
import {
    get as _get,
    isEqual as _isEqual,
    pick as _pick,
    set as _set,
} from 'lodash';
import { MemberSettingsFormProps } from './types';
import { Form } from '@components';
import MemberSettingsPageContentMemberActions from '../actions';
import { fieldSchema, validationSchema } from './schema';
import { selectData as selectMemberFormData } from '../selector';
import './MemberForm.less';

const MemberSettingsForm: React.FunctionComponent<MemberSettingsFormProps> = () => {
    const dispatch = useDispatch();
    const { initialValues } = useSelector(selectMemberFormData);
    console.log('HERE');

    const handleSubmit = (values: FormikValues) => {
        const uuid = _get(values, ['uuid'], undefined);
        const member = Object.entries(
            _pick(values, ['display_name', 'avatar'])
        ).reduce(
            (accum: any, [key, value]: any) =>
                !_isEqual(value, initialValues[key])
                    ? _set(accum, [key], value)
                    : accum,
            {}
        );
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
