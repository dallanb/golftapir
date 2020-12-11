import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContestPendingProps } from './types';
import { selectIsOwner } from '@pages/Contest/selector';
import { selectData } from './selector';
import PendingParticipantsTable from './PendingParticipantsList';
import ComponentContent from '@layouts/ComponentContent';
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

    let content = (
        <div>Please wait for all invited participants to respond</div>
    );

    if (isOwner) {
        content = <PendingParticipantsTable />;
    }

    return <>{content}</>;
};

export default ContestPending;
