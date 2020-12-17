import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import LoginForm from './LoginForm';
import { LoginProps, StateProps } from './types';
import LoginPageActions from './actions';
import './Login.less';

class Login extends React.PureComponent<LoginProps> {
    componentDidMount() {
        const { isLoggedIn, history, init } = this.props;
        if (isLoggedIn) {
            history.push('/app');
        } else {
            init();
        }
    }

    componentDidUpdate(prevProps: Readonly<LoginProps>) {
        const { isLoggedIn, history } = this.props;
        if (isLoggedIn) {
            history.push('/app');
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
