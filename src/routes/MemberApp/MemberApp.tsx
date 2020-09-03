import { Redirect, Route, Switch } from 'react-router-dom';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import accountRoutes from './accountRoutes';
import homeRoutes from './homeRoutes';
import { MemberAppLayout } from '../../layouts';
import { ProtectedRoute } from '../../components';
import {
    selectForceLogout,
    selectIsLoggedIn,
} from '../../selectors/AuthSelectors';
import AuthActions from '../../reducers/AuthReducer';

const MemberApp = ({ url }: { url: string }) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const forceLogout = useSelector(selectForceLogout);
    const dispatch = useDispatch();

    return (
        <MemberAppLayout>
            <Switch>
                {accountRoutes.map(
                    ({
                        path,
                        component,
                        exact,
                    }: {
                        path: string;
                        component: any;
                        exact?: boolean;
                    }) => (
                        <ProtectedRoute
                            key={path}
                            path={`${url}${path}`}
                            component={component}
                            exact={exact}
                            isLoggedIn={isLoggedIn}
                            forceLogout={forceLogout}
                            refresh={() => dispatch(AuthActions.refresh())}
                        />
                    )
                )}
                {homeRoutes.map(
                    ({
                        path,
                        component,
                        exact,
                    }: {
                        path: string;
                        component: any;
                        exact?: boolean;
                    }) => (
                        <Route
                            key={path}
                            path={`${url}${path}`}
                            component={component}
                            exact={exact}
                        />
                    )
                )}
                <Route render={() => <Redirect to={`${url}/home`} />} />
            </Switch>
        </MemberAppLayout>
    );
};
export default MemberApp;
