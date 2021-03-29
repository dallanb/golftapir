import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'antd';
import { MemberPendingProps } from './types';
import MembersPageActions from '@pages/Members/actions';
import { selectLeagueMember } from '@selectors/AppSelector';
import constants from '@constants';
import ComponentContent from '@layouts/ComponentContent';
import CONSTANTS from '@locale/en-CA';
import './MemberPending.less';
import { SpinnerActions } from '@actions';

const MemberPending: React.FunctionComponent<MemberPendingProps> = () => {
    const dispatch = useDispatch();
    const member = useSelector(selectLeagueMember);
    const handleAcceptClick = () => {
        dispatch(
            MembersPageActions.updateMemberStatus(
                member.data.uuid,
                constants.STATUS.ACTIVE.KEY
            )
        );
        dispatch(
            SpinnerActions.openSpinner(CONSTANTS.PAGES.MEMBERS.INVITE.WAIT)
        );
    };

    const handleDeclineClick = () => {
        dispatch(
            MembersPageActions.updateMemberStatus(
                member.data.uuid,
                constants.STATUS.INACTIVE.KEY
            )
        );
        dispatch(
            SpinnerActions.openSpinner(CONSTANTS.PAGES.MEMBERS.INVITE.WAIT)
        );
    };

    return (
        <ComponentContent
            title={CONSTANTS.COMMON.ACTIONS}
            className="member-pending"
            bodyClassName="member-pending-body"
        >
            <div className="member-pending-buttons">
                <div className="member-pending-buttons-button active">
                    <Button block type="primary" onClick={handleAcceptClick}>
                        Accept League Invite
                    </Button>
                </div>
                <div className="member-pending-buttons-button decline">
                    <Button
                        block
                        danger
                        type="primary"
                        onClick={handleDeclineClick}
                    >
                        Decline League Invite
                    </Button>
                </div>
            </div>
        </ComponentContent>
    );
};

export default MemberPending;
