import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContestPendingProps } from './types';
import { selectIsOwner } from '@pages/Contest/selector';
import PendingParticipantsList from './PendingParticipantsList';
import ContestPageSiderContentParticipantActiveContestPendingActions from './actions';
import './ContestPending.less';

const ContestPending: React.FunctionComponent<ContestPendingProps> = () => {
    const dispatch = useDispatch();
    // Possibly move this out to participant active
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

    const isOwner = useSelector(selectIsOwner);

    return isOwner ? <PendingParticipantsList /> : null;
};

export default ContestPending;
