import React from 'react';
import { connect } from 'react-redux';
import { FormikValues } from 'formik';
import { omit as _omit } from 'lodash';
import { ContestsCreateFormProps } from './types';
import { StateProps } from '../types';
import { Form } from '@components';
import ContestActions from '@actions/ContestActions';
import { fieldSchema, validationSchema } from './schema';
import './ContestsCreateForm.scss';

class ContestsCreateForm extends React.PureComponent<ContestsCreateFormProps> {
    handleSubmit = (values: FormikValues) => {
        const { createContest } = this.props;
        const contest = _omit(values, ['avatar']);
        const avatar = values.avatar;
        createContest(contest, avatar);
    };
    render() {
        const { initialValues } = this.props;
        return (
            <Form
                fieldSchema={fieldSchema}
                validationSchema={validationSchema}
                initialValues={initialValues}
                onSubmit={this.handleSubmit}
            />
        );
    }
}

const mapStateToProps = ({ contestsCreatePage }: StateProps) => {
    const { createFormInitialValues: initialValues } = contestsCreatePage;
    return {
        initialValues,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        createContest(values: FormikValues, avatar: File) {
            return dispatch(ContestActions.createContest(values, avatar));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContestsCreateForm);
