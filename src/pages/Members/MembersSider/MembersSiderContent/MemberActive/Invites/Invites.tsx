import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { get as _get, set as _set } from 'lodash';
import InvitesList from './InvitesList';
import { InvitesProps } from './types';
import MembersPageSiderContentInvitesActions from './actions';
import { selectData } from './selector';
import ComponentContent from '@layouts/ComponentContent';
import './Invites.less';
import { selectLeagueMembers } from '@selectors/AppSelector';
import { organizeMembersByStatus } from '@pages/Members/utils';

const Invites: React.FunctionComponent<InvitesProps> = ({}) => {
    const dispatch = useDispatch();
    const ref = useRef(null);

    useEffect(() => {
        dispatch(MembersPageSiderContentInvitesActions.init());
        return () => {
            dispatch(MembersPageSiderContentInvitesActions.terminate());
        };
    }, []);

    const { isInitialized, isFetching, options = undefined } = useSelector(
        selectData
    );
    const {
        data,
        metadata,
        isInitialized: leagueMembersIsInitialized,
        isRefreshing: leagueMembersIsRefreshing,
    } = useSelector(selectLeagueMembers);
    const members = organizeMembersByStatus(data);
    const activeParticipants = _get(members, ['invited'], []);

    const dataHeight = Math.min(400, activeParticipants.length * 50);
    const emptyHeight = 124;
    const dimensions = {};
    if (isInitialized) {
        _set(dimensions, ['height'], dataHeight || emptyHeight);
    }

    return (
        <ComponentContent
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
                data={activeParticipants}
                metadata={metadata}
                options={options}
                isFetching={isFetching}
            />
        </ComponentContent>
    );
};

export default Invites;
