import React from 'react';
import { useSelector } from 'react-redux';
import { ContestPendingProps } from './types';
import { selectIsOwner } from '@pages/Contest/selector';
import { selectData } from './selector';
import PendingParticipantsTable from './PendingParticipantsList';
import './ContestPending.scss';
import ComponentContent from '@layouts/ComponentContent';

const ContestPending: React.FunctionComponent<ContestPendingProps> = () => {
    const isOwner = useSelector(selectIsOwner);
    const { isInitialized } = useSelector(selectData);
    let content = (
        <div>Please wait for all invited participants to respond</div>
    );

    if (isOwner) {
        content = <PendingParticipantsTable />;
    }

    return (
        <ComponentContent showSpinner={!isInitialized}>
            {content}
        </ComponentContent>
    );
};

export default ContestPending;
