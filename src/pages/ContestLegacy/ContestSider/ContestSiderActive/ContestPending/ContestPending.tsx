import React from 'react';
import { useSelector } from 'react-redux';
import { ContestPendingProps } from './types';
import { selectIsOwner } from '@pages/Contest/selector';
import PendingParticipantsTable from './PendingParticipantsList';
import './ContestPending.scss';

const ContestPending: React.FunctionComponent<ContestPendingProps> = () => {
    const isOwner = useSelector(selectIsOwner);

    const renderContent = (owner: boolean) => {
        if (owner) {
            return (
                <div>
                    <PendingParticipantsTable />
                </div>
            );
        } else {
            return (
                <div>Please wait for all invited participants to respond</div>
            );
        }
    };
    return renderContent(isOwner);
};

export default ContestPending;
