import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'antd';
import { MemberPendingProps } from './types';
import MembersPageActions from '@pages/Members/actions';
import {selectLeagueMember} from "@apps/LeagueApp/selector";
import constants from '@constants';
import './MemberPending.less';

const MemberPending: React.FunctionComponent<MemberPendingProps> = () => {
    const dispatch = useDispatch();
    const member = useSelector(selectLeagueMember);
    const handleAcceptClick = () => {
        dispatch(
            MembersPageActions.updateMemberStatus(
                member.uuid,
                constants.STATUS.ACTIVE.KEY
            )
        );
    };

    const handleDeclineClick = () => {
        dispatch(
            MembersPageActions.updateMemberStatus(
                member.uuid,
                constants.STATUS.INACTIVE.KEY
            )
        );
    };

    return (
        <div className="member-pending">
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
        </div>
    );
};

export default MemberPending;
