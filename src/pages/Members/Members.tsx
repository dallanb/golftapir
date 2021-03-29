import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppLayoutContent } from '@layouts/AppLayout';
import { MembersProps } from './types';
import MembersPageActions from './actions';
import MembersContent from './MembersContent';
import MembersSider from './MembersSider';
import { selectMyLeagueUUID } from '@selectors/BaseSelector';
import { selectData } from './selector';
import './Members.less';

const Members: React.FunctionComponent<MembersProps> = () => {
    const dispatch = useDispatch();
    const leagueUUID = useSelector(selectMyLeagueUUID);
    const { isInitialized } = useSelector(selectData);

    useEffect(() => {
        dispatch(MembersPageActions.init(leagueUUID));
        return () => {
            dispatch(MembersPageActions.terminate());
        };
    }, []);
    return (
        <AppLayoutContent
            content={<MembersContent />}
            sider={<MembersSider />}
            className="members-view"
        />
    );
};

export default Members;
