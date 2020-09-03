import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { ProtectedRouteProps } from './types';
import './ProtectedRoute.scss';

const ProtectedRoute = ({
    component: Component,
    isLoggedIn,
    forceLogout,
    refresh,
    ...restProps
}: ProtectedRouteProps) => {
    const protect = (props: any) => {
        if (forceLogout) {
            return <Redirect to="/auth/login" />;
        }
        if (isLoggedIn) {
            return <Component {...props} />;
        }
        if (!refresh) {
            return <Redirect to="/auth/login" />;
        }
        refresh();
    };
    return <Route {...restProps} render={protect} />;
};

export default ProtectedRoute;
