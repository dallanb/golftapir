import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { set as _set } from 'lodash';
import { ContestPendingProps } from './types';
import ComponentContent from '@layouts/ComponentContent';
import PendingParticipantsList from './PendingParticipantsList';
import { selectData } from './selector';
import ContestPageSiderContentParticipantActiveContestPendingActions from './actions';
import './ContestPending.less';

const ContestPending: React.FunctionComponent<ContestPendingProps> = () => {
    const dispatch = useDispatch();
    const ref = useRef(null);

    useEffect(() => {
        dispatch(
            ContestPageSiderContentParticipantActiveContestPendingActions.init()
        );
        return () => {
            dispatch(
                ContestPageSiderContentParticipantActiveContestPendingActions.terminate()
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
    const dataHeight = Math.min(400, data.length * 50);
    const emptyHeight = 124;
    const dimensions = {};
    if (isInitialized) {
        _set(dimensions, ['height'], dataHeight || emptyHeight);
    }

    return (
        <ComponentContent
            componentRef={ref}
            showSpinner={!isInitialized || isRefreshing}
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
        </ComponentContent>
    );
};

export default ContestPending;
