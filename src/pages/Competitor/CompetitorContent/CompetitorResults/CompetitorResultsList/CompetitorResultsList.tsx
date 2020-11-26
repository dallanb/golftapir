import React, { ReactText } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { CompetitorResultsListProps } from './types';
import { List } from '@components';
import { selectData } from '../selector';
import ComponentContent from '@layouts/ComponentContent';
import CompetitorResultsListTile from './CompetitorResultsListTile';
import './CompetitorResultsList.scss';

const CompetitorResultsList: React.FunctionComponent<CompetitorResultsListProps> = () => {
    const history = useHistory();
    const { data, isFetching, isInitialized } = useSelector(selectData);

    const loadMore = (start: number, stop: number, resolve: () => void) =>
        resolve();

    const loadTableDimensions = (
        items: any[] = []
    ): { size: number; height: number; width: ReactText } => {
        // move this info to schema.tsx
        const size = 150;
        const width = '100%';
        const height = items.length * size;

        return { size, width, height };
    };

    return (
        <ComponentContent
            showSpinner={!isInitialized}
            className="competitor-results-list"
        >
            <List
                {...loadTableDimensions(data)}
                items={data}
                hasNextPage={false}
                loadNextPage={loadMore}
                isNextPageLoading={isFetching}
                minimumBatchSize={100}
                rowRenderer={(props) =>
                    CompetitorResultsListTile({ props, history })
                }
            />
        </ComponentContent>
    );
};

export default CompetitorResultsList;
