import React from 'react';
import { connect } from 'react-redux';
import { FormikValues } from 'formik';
import { CreateContestFormProps } from './types';
import { Form } from '../../../components';
import ContestActions from '../../../reducers/ContestReducer';
import { fieldSchema, validationSchema } from './schema';
import './CreateContestForm.scss';
import _ from 'lodash';
import { AuthStateInterface } from '../../../reducers/types';
import config from '../../../config.json';

class CreateContestForm extends React.PureComponent<CreateContestFormProps> {
    prepareInitialValues = () => {
        const { authData } = this.props;

        return {
            sport_uuid: config.GOLF_UUID,
            owner_uuid: _.get(authData, ['uuid']),
        };
    };

    handleSubmit = (values: FormikValues) => {
        console.log(values);
        // add createContest api
        const { createContest } = this.props;
        createContest(values);
    };
    render() {
        return (
            <Form
                fieldSchema={fieldSchema}
                validationSchema={validationSchema}
                initialValues={this.prepareInitialValues()}
                onSubmit={this.handleSubmit}
            />
        );
    }
}

const mapStateToProps = ({ auth }: { auth: AuthStateInterface }) => {
    return {
        authData: _.get(auth, ['data'], undefined),
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        createContest(values: FormikValues) {
            return dispatch(ContestActions.createContest(values));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateContestForm);
