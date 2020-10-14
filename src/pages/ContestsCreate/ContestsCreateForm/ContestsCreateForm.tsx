import React from 'react';
import { connect } from 'react-redux';
import { FormikValues } from 'formik';
import { omit as _omit } from 'lodash';
import { ContestsCreateFormProps } from './types';
import { StateProps } from '../types';
import { Form } from '@components';
import ContestCreatePageActions from '../actions';
import { fieldSchema, validationSchema } from './schema';
import './ContestsCreateForm.scss';

class ContestsCreateForm extends React.PureComponent<ContestsCreateFormProps> {
    handleSubmit = (values: FormikValues) => {
        const { createContest } = this.props;
        createContest(values);
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
        createContest(values: FormikValues) {
            return dispatch(ContestCreatePageActions.createContest(values));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContestsCreateForm);
