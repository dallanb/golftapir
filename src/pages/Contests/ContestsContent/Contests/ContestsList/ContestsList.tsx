import React, { ReactText } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { ContestsListProps } from './types';
import { List } from '@components';
import ContestsPageContentContestsActions from '../actions';
import { selectData } from '../selector';
import ContestsListTile from './ContestsListTile';
import './ContestsList.scss';

const ContestsList: React.FunctionComponent<ContestsListProps> = ({}) => {
    const history = useHistory();
    const { data, metadata, isFetching } = useSelector(selectData);

    const dispatch = useDispatch();
    const loadMore = (start: number, stop: number, resolve: () => any) => {
        dispatch(
            ContestsPageContentContestsActions.fetchData(
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
        // move this info to schema.tsx
        const size = 150;
        const width = '100%';
        const height = items.length * size;

        return { size, width, height };
    };
    return (
        <List
            {...loadTableDimensions(data)}
            items={data}
            hasNextPage={hasNextPage()}
            loadNextPage={loadMore}
            isNextPageLoading={isFetching}
            minimumBatchSize={100}
            rowRenderer={(props) => ContestsListTile({ props, history })}
        />
    );
};

export default ContestsList;
