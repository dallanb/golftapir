import React from 'react';
import { connect } from 'react-redux';
import { FormikValues } from 'formik';
import { ContestsCreateFormProps } from './types';
import { StateProps } from '../types';
import { Form } from '@components';
import ContestActions from '@actions/ContestActions';
import { fieldSchema, validationSchema } from './schema';
import './ContestsCreateForm.scss';

class ContestsCreateForm extends React.PureComponent<ContestsCreateFormProps> {
    handleSubmit = (values: FormikValues) => {
        const { createContest } = this.props;
        createContest(values);
    };
    render() {
        const { initialValues } = this.props;
        console.log(initialValues);
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
            return dispatch(ContestActions.createContest(values));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContestsCreateForm);
