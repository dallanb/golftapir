import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { get as _get, set as _set } from 'lodash';
import InvitesList from './InvitesList';
import { InvitesProps } from './types';
import MembersPageSiderInvitesActions from './actions';
import { selectData } from './selector';
import { SiderComponentContent } from '@layouts/ComponentContent';
import {
    selectLeagueMembers,
    selectLeagueMembersDataByStatus,
} from '@selectors/AppSelector';
import './Invites.less';

const Invites: React.FunctionComponent<InvitesProps> = ({}) => {
    const dispatch = useDispatch();
    const ref = useRef(null);

    useEffect(() => {
        dispatch(MembersPageSiderInvitesActions.init());
        return () => {
            dispatch(MembersPageSiderInvitesActions.terminate());
        };
    }, []);

    const { isInitialized, isFetching } = useSelector(selectData);
    const {
        isInitialized: leagueMembersIsInitialized,
        isRefreshing: leagueMembersIsRefreshing,
    } = useSelector(selectLeagueMembers);
    const members = useSelector(selectLeagueMembersDataByStatus);
    const pendingParticipants = _get(members, ['invited'], []);
    const invitedParticipants = _get(members, ['pending'], []);

    const dataHeight = Math.min(
        400,
        (pendingParticipants.length + invitedParticipants.length) * 50
    );
    const emptyHeight = 124;
    const dimensions = {};
    if (isInitialized) {
        _set(dimensions, ['height'], dataHeight || emptyHeight);
    }

    return (
        <SiderComponentContent
            componentRef={ref}
            showSpinner={
                !isInitialized ||
                !leagueMembersIsInitialized ||
                leagueMembersIsRefreshing
            }
            className="invites space"
            bodyClassName="invites-component-content-body"
            bodyStyle={dimensions}
            title={'Invites'}
        >
            <InvitesList
                containerRef={ref}
                containerDimensions={dimensions}
                data={[...pendingParticipants, ...invitedParticipants]}
                isFetching={isFetching}
            />
        </SiderComponentContent>
    );
};

export default Invites;
