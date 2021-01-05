import React from 'react';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Spin } from 'antd';
import LogoutPageActions from './actions';
import { LogoutProps, StateProps } from './types';
import './Logout.less';
import routes from '@constants/routes';
import { withAppRoute } from '@utils';
import constants from '@constants';

class Logout extends React.PureComponent<LogoutProps> {
    componentDidMount() {
        const { init, isLoggedIn, history } = this.props;
        // if (isLoggedIn) {
        init();
        // } else {
        //     history.push('/auth/login');
        // }
    }

    componentDidUpdate(prevProps: Readonly<LogoutProps>) {
        // const { isLoggedIn, history } = this.props;
        // if (!isLoggedIn) {
        //     history.push('/auth/login');
        // }
        const { isInitialized, isLoggedIn, history } = this.props;
        if (isInitialized && !isLoggedIn) {
            history.push(
                withAppRoute(routes.ROUTES.LOGIN.ROUTE, {
                    app: constants.APPS.AUTH_APP,
                })
            );
        }
    }

    componentWillUnmount() {
        const { terminate } = this.props;
        terminate();
    }

    render() {
        const { isInitialized } = this.props;
        if (!isInitialized) return <Spin />;
        return null;
    }
}

const mapStateToProps = ({ logoutPage, auth }: StateProps) => {
    const { isInitialized } = logoutPage;
    const { isLoggedIn } = auth;
    return { isInitialized, isLoggedIn };
};
const mapDispatchToProps = (dispatch: any) => {
    return {
        init() {
            return dispatch(LogoutPageActions.init());
        },
        terminate() {
            return dispatch(LogoutPageActions.terminate());
        },
    };
};

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(Logout);
