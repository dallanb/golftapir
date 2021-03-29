import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { set as _set } from 'lodash';
import { ContestPendingProps } from './types';
import { SiderComponentContent } from '@layouts/ComponentContent';
import PendingParticipantsList from './PendingParticipantsList';
import { selectData } from './selector';
import ContestPageSiderParticipantActiveContestPendingActions from './actions';
import './ContestPending.less';
import { selectLeagueMembersIsFetching } from '@selectors/AppSelector';

const ContestPending: React.FunctionComponent<ContestPendingProps> = () => {
    const dispatch = useDispatch();
    const ref = useRef(null);

    useEffect(() => {
        dispatch(ContestPageSiderParticipantActiveContestPendingActions.init());
        return () => {
            dispatch(
                ContestPageSiderParticipantActiveContestPendingActions.terminate()
            );
        };
    }, []);

    const {
        isInitialized,
        isRefreshing,
        isFetching,
        data = [],
        metadata = [],
    } = useSelector(selectData);
    const leagueMembersIsFetching = useSelector(selectLeagueMembersIsFetching); // since we need membersHash we need this to be ready
    const dataHeight = Math.min(400, data.length * 50);
    const emptyHeight = 124;
    const dimensions = {};
    if (isInitialized) {
        _set(dimensions, ['height'], dataHeight || emptyHeight);
    }

    return (
        <SiderComponentContent
            componentRef={ref}
            showSpinner={
                !isInitialized || isRefreshing || leagueMembersIsFetching
            }
            className="contest-pending-component-content space"
            bodyClassName="invites-component-content-body"
            bodyStyle={dimensions}
            title={'Pending Participants'}
        >
            <PendingParticipantsList
                containerRef={ref}
                containerDimensions={dimensions}
                data={data}
                metadata={metadata}
                isFetching={isFetching}
            />
        </SiderComponentContent>
    );
};

export default ContestPending;
