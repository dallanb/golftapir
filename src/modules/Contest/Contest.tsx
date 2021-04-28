import React from 'react';
import { get as _get } from 'lodash';
import { Route, Switch, useParams } from 'react-router-dom';
import { ContestProps } from './types';
import { contestRoutes } from '@modules/Contest/routes';
import { ComponentRoute } from '@apps/LeagueApp/types';
import constantRoutes from '@constants/routes';
import useContest from './useContest';
import './Contest.less';

const Contest: React.FunctionComponent<ContestProps> = () => {
    const params = useParams();
    const contestUUID = _get(params, ['contest_uuid'], null);
    useContest(contestUUID);
    return (
        <Switch>
            {contestRoutes.map(({ path, component, exact }: ComponentRoute) => (
                <Route
                    key={path}
                    path={`${constantRoutes.APPS.LEAGUE_APP.ROUTE}${path}`}
                    component={component}
                    exact={exact}
                />
            ))}
        </Switch>
    );
};

export default Contest;
