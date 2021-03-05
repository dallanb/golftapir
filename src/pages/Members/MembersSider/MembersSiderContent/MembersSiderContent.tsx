import React from 'react';
import SiderLayoutContent from '@layouts/SiderLayout/SiderLayoutContent';
import { MembersSiderContentProps } from './types';
import { useSelector } from 'react-redux';
import { selectData } from '@pages/Members/selector';
import { selectLeagueMemberStatus } from '@selectors/AppSelector';
import constants from '@constants';
import MemberPending from './MemberPending';
import MemberActive from './MemberActive';

const MembersSiderContent: React.FunctionComponent<MembersSiderContentProps> = ({}) => {
    const { isInitialized } = useSelector(selectData);
    const memberStatus = useSelector(selectLeagueMemberStatus);
    const contentRenderer = (status: string) => {
        // switch (status) {
        // case constants.STATUS.PENDING.KEY:
        return <MemberPending />;
        // case constants.STATUS.ACTIVE.KEY:
        //     return <MemberActive />;
        // default:
        //     return null;
        // }
    };
    return (
        <SiderLayoutContent showSpinner={!isInitialized}>
            <>{contentRenderer(memberStatus)}</>
        </SiderLayoutContent>
    );
};

export default MembersSiderContent;
