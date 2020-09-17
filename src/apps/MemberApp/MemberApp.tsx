import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Spin } from 'antd';
import { MemberAppLayout } from '@layouts';
import { ComponentRoute, MemberAppProps } from './types';
import { ProtectedRoute } from '@components';
import { routes, protectedRoutes } from './routes';
import { AuthActions } from '@actions';
import BaseActions from './actions';
import statics from '@apps/MemberApp/statics';

class MemberApp extends React.Component<MemberAppProps> {
    componentDidMount() {
        const { init } = this.props;
        init();
    }

    render() {
        const {
            isInitialized,
            url,
            isLoggedIn,
            forceLogout,
            refresh,
        } = this.props;
        if (!isInitialized) return <Spin />;
        return (
            <MemberAppLayout name="DALLAN BHATTI" menuRoutes={statics}>
                <Switch>
                    {routes.map(
                        ({ path, component, exact }: ComponentRoute) => (
                            <Route
                                key={path}
                                path={`${url}${path}`}
                                component={component}
                                exact={exact}
                            />
                        )
                    )}
                    {protectedRoutes.map(
                        ({ path, component, exact }: ComponentRoute) => (
                            <ProtectedRoute
                                key={path}
                                path={`${url}${path}`}
                                component={component}
                                exact={exact}
                                isLoggedIn={isLoggedIn}
                                forceLogout={forceLogout}
                                refresh={() => refresh()}
                            />
                        )
                    )}
                    <Route render={() => <Redirect to={`${url}/home`} />} />
                </Switch>
            </MemberAppLayout>
        );
    }
}

const mapStateToProps = ({ base, auth }: any) => {
    const { isInitialized } = base;
    const { isLoggedIn, forceLogout } = auth;

    return {
        isInitialized,
        isLoggedIn,
        forceLogout,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        init() {
            dispatch(BaseActions.init());
        },
        refresh() {
            dispatch(AuthActions.refresh());
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MemberApp);
