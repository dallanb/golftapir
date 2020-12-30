import React from 'react';
import { useSelector } from 'react-redux';
import { LeagueHeaderProps } from './types';
import { ContentLayoutHeader } from '@layouts';
import CONSTANTS from '@locale/en-CA';
import { selectLeague, selectLeagueName, selectLeagueUUID } from '../selector';
import { Breadcrumb } from '@components';
import routes from '@constants/routes';

const LeagueHeader: React.FunctionComponent<LeagueHeaderProps> = () => {
    const title = useSelector(selectLeagueName);
    const subTitle = CONSTANTS.PAGES.LEAGUE.DESCRIPTION;
    const extra = (
        <Breadcrumb
            state={{
                [routes.LEAGUE_APP.LEAGUE.KEY]: {
                    ...useSelector(selectLeague),
                },
            }}
            params={{
                [routes.LEAGUE_APP.LEAGUE.KEY]: {
                    uuid: useSelector(selectLeagueUUID),
                },
            }}
        />
    );
    return (
        <ContentLayoutHeader title={title} subTitle={subTitle} extra={extra} />
    );
};

export default LeagueHeader;
