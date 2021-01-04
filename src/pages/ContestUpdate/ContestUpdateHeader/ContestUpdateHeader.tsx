import React from 'react';
import { useSelector } from 'react-redux';
import { ContestUpdateHeaderProps } from './types';
import { ContentLayoutHeader } from '@layouts';
import CONSTANTS from '@locale/en-CA';
import { selectContest, selectContestName } from '../selector';
import { Breadcrumb } from '@components';
import routes from '@constants/routes';
import constantRoutes from '@constants/routes';

const ContestUpdateHeader: React.FunctionComponent<ContestUpdateHeaderProps> = () => {
    const title = useSelector(selectContestName);
    const subTitle = CONSTANTS.PAGES.CONTEST_UPDATE.DESCRIPTION;
    const extra = (
        <Breadcrumb
            route={constantRoutes.ROUTES.CONTEST_UPDATE.ROUTE}
            state={{
                [routes.ROUTES.CONTEST.KEY]: {
                    ...useSelector(selectContest),
                },
            }}
        />
    );
    return (
        <ContentLayoutHeader title={title} subTitle={subTitle} extra={extra} />
    );
};

export default ContestUpdateHeader;
