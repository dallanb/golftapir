import React from 'react';
import { connect } from 'react-redux';
import { FormikValues } from 'formik';
import { pick as _pick } from 'lodash';
import { ContestsCreateFormProps } from './types';
import { StateProps } from '../types';
import { Form } from '@components';
import ContestCreatePageActions from '../actions';
import { fieldSchema, validationSchema } from './schema';
import './ContestsCreateForm.scss';

class ContestsCreateForm extends React.PureComponent<ContestsCreateFormProps> {
    handleSubmit = (values: FormikValues) => {
        const { createContest } = this.props;
        console.log(values);
        const contest = _pick(values, [
            'owner_uuid',
            'sport_uuid',
            'location_uuid',
            'name',
            'avatar',
            'start_time',
            'participants',
        ]);
        createContest(contest);
    };
    render() {
        const { initialValues } = this.props;
        return (
            <div className="contests-create-form">
                <Form
                    fieldSchema={fieldSchema}
                    validationSchema={validationSchema}
                    initialValues={initialValues}
                    onSubmit={this.handleSubmit}
                />
            </div>
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
