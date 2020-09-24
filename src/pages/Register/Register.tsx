import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { RegisterProps, StateProps } from './types';
import RegisterFormActions from './actions';
import RegisterForm from './RegisterForm';
import './Register.scss';

class Register extends React.PureComponent<RegisterProps> {
    componentDidMount() {
        const { init } = this.props;
        init();
    }

    componentDidUpdate(prevProps: Readonly<RegisterProps>) {
        const { isRegistered, history } = this.props;
        if (isRegistered) {
            history.push('/auth/login');
        }
    }

    render() {
        return (
            <div className="register-view">
                <RegisterForm />
            </div>
        );
    }
}

const mapStateToProps = ({ registerPage }: StateProps) => {
    const { isRegistered } = registerPage;
    return {
        isRegistered,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        init() {
            return dispatch(RegisterFormActions.init());
        },
    };
};

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(Register);
