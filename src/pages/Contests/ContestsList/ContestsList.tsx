import React, { ReactText } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContestsListProps } from './types';
import { List } from '@components';
import { ContestActions } from '@actions';
import { selectContestsList } from '../selector';
import ContestsListTile from './ContestsListTile';
import ComponentContent from '@layouts/ComponentContent';
import './ContestsList.scss';
import { Spin } from 'antd';

const ContestsList: React.FunctionComponent<ContestsListProps> = ({
    history,
}) => {
    const { data, metadata, isFetching, isInitialized } = useSelector(
        selectContestsList
    );

    const dispatch = useDispatch();
    const loadMore = (start: number, stop: number, resolve: () => any) => {
        dispatch(
            ContestActions.fetchContestsMaterialized(
                {
                    page: Math.floor(stop / 100) + 1,
                    per_page: 100,
                },
                true
            )
        );
        resolve();
    };

    const hasNextPage = () => {
        return (
            metadata && metadata.page * metadata.per_page < metadata.total_count
        );
    };

    const loadTableDimensions = (
        items: any[] = []
    ): { size: number; height: ReactText; width: ReactText } => {
        // move this info to schema.ts
        const size = 150;
        const width = '100%';
        const height = items.length * size;

        return { size, width, height };
    };
    if (!isInitialized) return <Spin />;
    return (
        // <ComponentContent showSpinner={!isInitialized}>
        <List
            {...loadTableDimensions(data)}
            items={data}
            hasNextPage={hasNextPage()}
            loadNextPage={loadMore}
            isNextPageLoading={isFetching}
            minimumBatchSize={100}
            rowRenderer={(props) => ContestsListTile({ props, history })}
        />
        // </ComponentContent>
    );
};

export default ContestsList;
