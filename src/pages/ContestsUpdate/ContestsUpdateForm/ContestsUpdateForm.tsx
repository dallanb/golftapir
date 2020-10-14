import React from 'react';
import { connect } from 'react-redux';
import { FormikValues } from 'formik';
import { isEqual as _isEqual, set as _set } from 'lodash';
import { ContestsUpdateFormProps } from './types';
import { StateProps } from '../types';
import ContestsUpdatePageActions from '../actions';
import { Form } from '@components';
import { fieldSchema, validationSchema } from './schema';
import './ContestsUpdateForm.scss';

class ContestsUpdateForm extends React.PureComponent<ContestsUpdateFormProps> {
    handleSubmit = (values: FormikValues) => {
        const { updateContest, uuid, initialValues } = this.props;
        const contest = Object.entries(values).reduce(
            (accum: any, [key, value]: any) =>
                !_isEqual(value, initialValues[key])
                    ? _set(accum, [key], value)
                    : accum,
            {}
        );
        updateContest(uuid, contest);
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
            return dispatch(
                ContestsUpdatePageActions.updateContest(uuid, values)
            );
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContestsUpdateForm);
