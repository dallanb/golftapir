import React, { ReactText } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { CompetitorsListProps } from './types';
import { List } from '@components';
import CompetitorsPageContentCompetitorsActions from '../actions';
import { selectData } from '../selector';
import CompetitorsListTile from './CompetitorsListTile';
import './CompetitorsList.scss';

const CompetitorsList: React.FunctionComponent<CompetitorsListProps> = ({}) => {
    const history = useHistory();
    const { data, metadata, isFetching } = useSelector(selectData);

    const dispatch = useDispatch();
    const loadMore = (start: number, stop: number, resolve: () => any) => {
        dispatch(
            CompetitorsPageContentCompetitorsActions.fetchData(
                {
                    page: Math.floor(stop / 10) + 1,
                    per_page: 10,
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
            minimumBatchSize={10}
            rowRenderer={(props) => CompetitorsListTile({ props, history })}
        />
    );
};

export default CompetitorsList;
