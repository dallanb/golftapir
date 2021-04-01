import React from 'react';
import { useSelector } from 'react-redux';
import { MembersSiderProps } from './types';
import SiderLayoutContent from '@layouts/SiderLayout/SiderLayoutContent';
import { selectData } from '@pages/Members/selector';
import { selectLeagueMemberStatus } from '@selectors/AppSelector';
import constants from '@constants';
import MemberPending from './MemberPending';
import MemberActive from './MemberActive';
import './MembersSider.less';

const MembersSider: React.FunctionComponent<MembersSiderProps> = () => {
    const { isInitialized } = useSelector(selectData);
    const memberStatus = useSelector(selectLeagueMemberStatus);
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
        // TODO: remove the spinner here and move it into the SiderComponentContents
        <SiderLayoutContent showSpinner={!isInitialized}>
            <>{contentRenderer(memberStatus)}</>
        </SiderLayoutContent>
    );
};

export default MembersSider;
