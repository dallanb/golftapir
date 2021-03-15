import React from 'react';
import { useSelector } from 'react-redux';
import { get as _get } from 'lodash';
import { MemberActionsProps } from './types';
import {
    selectData,
    selectIsInitialized,
    selectIsMe,
} from '@pages/Member/selector';
import { memoizedGenerateActions } from './utils';
import { memoizedMemberActionRenderer } from './memberActionRenderer';
import ComponentContent from '@layouts/ComponentContent';
import './MemberActions.less';

const MemberActions: React.FunctionComponent<MemberActionsProps> = () => {
    const isInitialized = useSelector(selectIsInitialized);
    const isMe = useSelector(selectIsMe);
    const { member } = useSelector(selectData);
    const uuid = _get(member, ['uuid'], null);
    const actions = memoizedGenerateActions(uuid);

    const Actions = memoizedMemberActionRenderer({
        actions,
        isMe,
    });
    if (!Actions.length) return null;
    return (
        <ComponentContent
            title={'Actions'}
            className="member-actions"
            bodyClassName="member-actions-body"
            showSpinner={!isInitialized}
        >
            {Actions}
        </ComponentContent>
    );
};

export default MemberActions;
