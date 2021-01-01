import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { ProtectedRouteProps } from './types';
import './ProtectedRoute.less';

const ProtectedRoute = ({
    component: Component,
    isLoggedIn,
    forceLogout,
    refresh,
    componentProps,
    ...restProps
}: ProtectedRouteProps) => {
    const protect = (props: any) => {
        if (forceLogout) {
            return <Redirect to="/auth/login" />;
        }
        if (isLoggedIn) {
            // // TODO: maybe try to pass in props like league here!
            return <Component {...props} {...componentProps} />;
        }
    };
    return <Route {...restProps} render={protect} />;
};

export default ProtectedRoute;
