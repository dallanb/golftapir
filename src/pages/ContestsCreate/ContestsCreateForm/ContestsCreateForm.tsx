import React from 'react';
import { connect } from 'react-redux';
import { FormikValues } from 'formik';
import _ from 'lodash';
import { ContestsCreateFormProps, StateInterface } from './types';
import { Form } from '@components';
import ContestActions from '@reducers/ContestReducer';
import { withTarget } from '@utils';
import constants from '@constants';
import { fieldSchema, validationSchema } from './schema';
import config from 'config';
import './ContestsCreateForm.scss';

class ContestsCreateForm extends React.PureComponent<ContestsCreateFormProps> {
    prepareInitialValues = () => {
        const { authData } = this.props;

        return {
            sport_uuid: config.GOLF_UUID,
            owner_uuid: _.get(authData, ['uuid']),
        };
    };

    handleSubmit = (values: FormikValues) => {
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

const mapStateToProps = ({ contestsCreatePage }: StateInterface) => {
    const {
        data: { auth },
    } = contestsCreatePage;
    return {
        authData: auth.data,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        createContest(values: FormikValues) {
            return dispatch(
                withTarget(
                    ContestActions.createContest,
                    constants.TARGETS.CONTESTS_CREATE_PAGE
                )(values)
            );
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContestsCreateForm);
