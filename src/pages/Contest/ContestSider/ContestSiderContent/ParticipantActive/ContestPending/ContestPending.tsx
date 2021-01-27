import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContestPendingProps } from './types';
import { selectIsOwner } from '@pages/Contest/selector';
import { selectData } from './selector';
import PendingParticipantsList from './PendingParticipantsList';
import ComponentContent from '@layouts/ComponentContent';
import ContestPageSiderContentParticipantActiveContestPendingActions from './actions';
import './ContestPending.less';
import PayoutProportions from '@pages/Contest/ContestSider/ContestSiderContent/PayoutProportions';

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
