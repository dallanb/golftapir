import React, { useEffect } from 'react';
import { get as _get } from 'lodash';
import { useDispatch } from 'react-redux';
import { Route, Switch, useHistory, useParams } from 'react-router-dom';
import { ContestProps } from './types';
import { contestRoutes } from '@modules/Contest/routes';
import { ComponentRoute } from '@apps/LeagueApp/types';
import constantRoutes from '@constants/routes';
import useContest from './useContest';
import ContestModuleActions from './actions';
import './Contest.less';

const Contest: React.FunctionComponent<ContestProps> = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const params = useParams();
    const state = _get(history, ['location', 'state'], null);
    const contestUUID = _get(params, ['contest_uuid'], null);
    useContest(contestUUID);

    useEffect(() => {
        dispatch(ContestModuleActions.preInit(state));
        dispatch(ContestModuleActions.init(contestUUID));
        return () => {
            dispatch(ContestModuleActions.terminate());
        };
    }, []);

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
