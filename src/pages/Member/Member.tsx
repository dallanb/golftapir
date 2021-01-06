import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContentLayout } from '@layouts';
import { MemberProps } from './types';
import MemberPageActions from './actions';
import MemberHeader from './MemberHeader';
import MemberContent from './MemberContent';
import MemberSider from './MemberSider';
import { selectMyLeagueUUID } from '@selectors/BaseSelector';
import { selectData } from './selector';
import './Member.less';

const Member: React.FunctionComponent<MemberProps> = () => {
    const dispatch = useDispatch();
    const leagueUUID = useSelector(selectMyLeagueUUID);
    const { isInitialized } = useSelector(selectData);

    useEffect(() => {
        dispatch(MemberPageActions.init(leagueUUID));
        return () => {
            dispatch(MemberPageActions.terminate());
        };
    }, []);

    return (
        <ContentLayout
            header={<MemberHeader />}
            content={<MemberContent />}
            sider={<MemberSider />}
            // showSpinner={!isInitialized}
            className="league-members-view"
        />
    );
};

export default Member;
