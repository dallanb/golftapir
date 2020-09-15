import React from 'react';
import { connect } from 'react-redux';
import { FormikValues } from 'formik';
import { ContestsCreateFormProps } from './types';
import { Form } from '@components';
import ContestActions from '@reducers/data/ContestReducer';
import { fieldSchema, validationSchema } from './schema';
import _ from 'lodash';
import config from 'config';
import { AuthInterface } from '@reducers/data/AuthReducer';
import './ContestsCreateForm.scss';
import { ContestsCreatePageInterface } from '@reducers/ui/ContestsCreatePage';

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

const mapStateToProps = ({
    contestsCreatePage,
}: {
    contestsCreatePage: {
        ui: ContestsCreatePageInterface;
        data: AuthInterface;
    };
}) => {
    return {
        authData: _.get(contestsCreatePage, ['data', 'data'], undefined),
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
