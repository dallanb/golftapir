import React from 'react';
import { useSelector } from 'react-redux';
import { LeagueHomeHeaderProps } from './types';
import { ContentLayoutHeader } from '@layouts';
import CONSTANTS from '@locale/en-CA';
import {
    selectLeague,
    selectLeagueName,
    selectLeagueUUID,
} from '@apps/LeagueApp/selector';
import { Breadcrumb } from '@components';
import routes from '@constants/routes';
import constantRoutes from '@constants/routes';

const LeagueHomeHeader: React.FunctionComponent<LeagueHomeHeaderProps> = () => {
    const title = useSelector(selectLeagueName);
    const subTitle = CONSTANTS.PAGES.LEAGUE.DESCRIPTION;
    const extra = (
        <Breadcrumb
            route={constantRoutes.ROUTES.HOME.ROUTE}
            state={{
                [routes.ROUTES.HOME.KEY]: {
                    ...useSelector(selectLeague),
                },
            }}
            params={{
                [routes.ROUTES.HOME.KEY]: {
                    uuid: useSelector(selectLeagueUUID),
                },
            }}
        />
    );
    return (
        <ContentLayoutHeader title={title} subTitle={subTitle} extra={extra} />
    );
};

export default LeagueHomeHeader;
