import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import LoginForm from './LoginForm';
import { LoginProps, StateProps } from './types';
import LoginPageActions from './actions';
import './Login.scss';

class Login extends React.PureComponent<LoginProps> {
    componentDidMount() {
        const { init } = this.props;
        init();
    }

    componentDidUpdate(prevProps: Readonly<LoginProps>) {
        const { isLoggedIn, history } = this.props;
        if (isLoggedIn) {
            history.push('/app/home');
        }
    }

    render() {
        return (
            <div className="login-view">
                <LoginForm />
            </div>
        );
    }
}

const mapStateToProps = ({ auth }: StateProps) => {
    const { isLoggedIn } = auth;
    return {
        isLoggedIn,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        init() {
            return dispatch(LoginPageActions.init());
        },
    };
};

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(Login);
