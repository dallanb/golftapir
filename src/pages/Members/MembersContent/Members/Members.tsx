import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { get as _get } from 'lodash';
import MembersList from './MembersList';
import { MembersProps } from './types';
import MembersPageContentMembersActions from './actions';
import { selectData } from './selector';
import ComponentContent from '@layouts/ComponentContent';
import { selectMyUUID } from '@selectors/BaseSelector';
import {
    selectLeagueMembers,
    selectLeagueMembersDataByStatus,
} from '@selectors/AppSelector';
import { organizeMembers } from '@pages/Members/utils';
import './Members.less';

const Members: React.FunctionComponent<MembersProps> = ({}) => {
    const dispatch = useDispatch();
    const ref = useRef(null);

    useEffect(() => {
        dispatch(MembersPageContentMembersActions.init());
        return () => {
            dispatch(MembersPageContentMembersActions.terminate());
        };
    }, []);

    const { isInitialized, isRefreshing, isFetching } = useSelector(selectData);
    const {
        isInitialized: leagueMembersIsInitialized,
        isRefreshing: leagueMembersIsRefreshing,
    } = useSelector(selectLeagueMembers);
    const members = useSelector(selectLeagueMembersDataByStatus);
    const activeMembers = _get(members, ['active'], []);
    const uuid = useSelector(selectMyUUID);
    const data = organizeMembers(uuid, activeMembers);

    return (
        <ComponentContent
            componentRef={ref}
            showSpinner={
                !isInitialized ||
                !leagueMembersIsInitialized ||
                isRefreshing ||
                leagueMembersIsRefreshing
            }
            className="members-component-content"
            title={'Members List'}
        >
            <MembersList
                containerRef={ref}
                data={data}
                isFetching={isFetching}
            />
        </ComponentContent>
    );
};

export default Members;
