import { Redirect, Route, Switch } from 'react-router-dom';
import React from 'react';
import accountRoutes from './accountRoutes';
import homeRoutes from './homeRoutes';
import { MemberAppLayout } from '../../layouts';

function MemberApp(url: string) {
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
                        <Route
                            key={path}
                            path={`${url}${path}`}
                            component={component}
                            exact={exact}
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
}

export default MemberApp;
