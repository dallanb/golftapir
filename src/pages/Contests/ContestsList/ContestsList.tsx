import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContestsListProps } from './types';
import { List } from '@components';
import { ContestActions } from '@actions';
import { selectContestsList } from '../selector';
import ContestsListTile from './ContestsListTile';
import ComponentContent from '@layouts/ComponentContent';
import './ContestsList.scss';

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

    return (
        <ComponentContent showSpinner={!isInitialized}>
            <List
                size={150}
                items={data}
                hasNextPage={hasNextPage()}
                loadNextPage={loadMore}
                isNextPageLoading={isFetching}
                minimumBatchSize={100}
                rowRenderer={(props) => ContestsListTile({ props, history })}
            />
        </ComponentContent>
    );
};

export default ContestsList;
