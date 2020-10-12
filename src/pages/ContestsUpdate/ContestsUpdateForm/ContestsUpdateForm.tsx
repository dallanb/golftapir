import React from 'react';
import { connect } from 'react-redux';
import { FormikValues } from 'formik';
import { ContestsUpdateFormProps } from './types';
import { StateProps } from '../types';
import { Form } from '@components';
import ContestActions from '@actions/ContestActions';
import { fieldSchema, validationSchema } from './schema';
import './ContestsUpdateForm.scss';

class ContestsUpdateForm extends React.PureComponent<ContestsUpdateFormProps> {
    handleSubmit = (values: FormikValues) => {
        const { updateContest, uuid } = this.props;
        updateContest(uuid, values);
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

const mapStateToProps = ({ contestsUpdatePage }: StateProps) => {
    const { updateFormInitialValues: initialValues } = contestsUpdatePage;
    return {
        initialValues,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        updateContest(uuid: string, values: FormikValues) {
            return dispatch(ContestActions.updateContest(uuid, values));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContestsUpdateForm);
