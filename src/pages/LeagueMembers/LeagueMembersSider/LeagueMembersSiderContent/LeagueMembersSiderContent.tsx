import React from 'react';
import SiderLayoutContent from '@layouts/SiderLayout/SiderLayoutContent';
import { LeagueMembersSiderContentProps } from './types';
import { useSelector } from 'react-redux';
import { selectData } from '@pages/LeagueMembers/selector';
import { selectMyStatus } from '@selectors/BaseSelector';
import constants from '@constants';
import MemberPending from './MemberPending';
import MemberActive from './MemberActive';

const LeagueMembersSiderContent: React.FunctionComponent<LeagueMembersSiderContentProps> = ({}) => {
    const { isInitialized } = useSelector(selectData);
    const memberStatus = useSelector(selectMyStatus);
    const contentRenderer = (status: string) => {
        switch (status) {
            case constants.STATUS.PENDING.KEY:
                return <MemberPending />;
            case constants.STATUS.ACTIVE.KEY:
                return <MemberActive />;
            default:
                return null;
        }
    };
    return (
        <SiderLayoutContent showSpinner={!isInitialized}>
            <>{contentRenderer(memberStatus)}</>
        </SiderLayoutContent>
    );
};

export default LeagueMembersSiderContent;
