import React, { ReactText } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ComponentContent from '@layouts/ComponentContent';
import { List } from '@components';
import { PendingParticipantsListProps } from './types';
import PendingParticipantsListTile from './PendingParticipantsListTile';
import { selectData, selectListData, selectListIsFetching } from '../selector';
import ContestPageSiderContentParticipantActiveContestPendingActions from '../actions';
import './PendingParticipantsList.scss';

const PendingParticipantsList: React.FunctionComponent<PendingParticipantsListProps> = () => {
    const dispatch = useDispatch();
    const { isInitialized } = useSelector(selectData);
    const data = useSelector(selectListData);
    const isFetching = useSelector(selectListIsFetching);
    const loadMore = (start: number, stop: number, resolve: () => any) => {
        dispatch(
            ContestPageSiderContentParticipantActiveContestPendingActions.fetchData(
                {
                    page: Math.floor(stop / 10) + 1,
                    per_page: 10,
                },
                true
            )
        );
        resolve();
    };

    const loadTableDimensions = (
        items: any[]
    ): { size: number; height: ReactText; width: ReactText } => {
        // move this info to schema.tsx
        const size = 50;
        const width = '100%';
        const height = Math.min(items.length * size, 150);

        return { size, width, height };
    };

    return (
        <ComponentContent showSpinner={!isInitialized}>
            <List
                {...loadTableDimensions(data)}
                hasNextPage={false}
                isNextPageLoading={isFetching}
                items={data}
                loadNextPage={loadMore}
                minimumBatchSize={10}
                rowRenderer={(props) => PendingParticipantsListTile({ props })}
            />
        </ComponentContent>
    );
};

export default PendingParticipantsList;
