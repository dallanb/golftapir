import React from 'react';

export interface ProtectedRouteProps {
    component: new () => React.Component;
    isLoggedIn: boolean;
    forceLogout: boolean;
    path: string;
    exact: boolean | undefined;
    refresh?: () => void;
}
