import React, { ReactText } from 'react';
import { useSelector } from 'react-redux';
import { List } from '@components';
import { PendingParticipantsListProps } from './types';
import PendingParticipantsListTile from './PendingParticipantsListTile';
import { selectContestParticipants } from '@pages/Contest/selector';
import './PendingParticipantsList.scss';

const PendingParticipantsList: React.FunctionComponent<PendingParticipantsListProps> = () => {
    const loadMore = (start: number, stop: number, resolve: () => void) =>
        resolve();

    const loadTableDimensions = (
        items: any[]
    ): { size: number; height: ReactText; width: ReactText } => {
        // move this info to schema.tsx
        const size = 50;
        const width = '100%';
        const height = Math.min(items.length * size, 150);

        return { size, width, height };
    };
    const renderContent = (items: any[]) => {
        if (!items || !items.length) {
            return 'NA';
        }
        return (
            <List
                {...loadTableDimensions(items)}
                hasNextPage={false}
                isNextPageLoading={false}
                items={items}
                loadNextPage={loadMore}
                minimumBatchSize={100}
                rowRenderer={(props) => PendingParticipantsListTile({ props })}
            />
        );
    };

    const items = useSelector(selectContestParticipants);

    return (
        <div className="pending-participants-list">{renderContent(items)}</div>
    );
};

export default PendingParticipantsList;
