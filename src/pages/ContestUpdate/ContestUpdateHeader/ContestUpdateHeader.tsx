import React from 'react';
import { useSelector } from 'react-redux';
import { ContestUpdateHeaderProps } from './types';
import { ContentLayoutHeader } from '@layouts';
import CONSTANTS from '@locale/en-CA';
import { selectContest, selectContestName } from '../selector';
import { Breadcrumb } from '@apps/MemberApp/components';
import routes from '@constants/routes';

const ContestUpdateHeader: React.FunctionComponent<ContestUpdateHeaderProps> = () => {
    const title = useSelector(selectContestName);
    const subTitle = CONSTANTS.PAGES.CONTEST_UPDATE.DESCRIPTION;
    const extra = (
        <Breadcrumb
            state={{
                [routes.CONTEST.KEY]: { ...useSelector(selectContest) },
            }}
        />
    );
    return (
        <ContentLayoutHeader title={title} subTitle={subTitle} extra={extra} />
    );
};

export default ContestUpdateHeader;
