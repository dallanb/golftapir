import React, { ReactText } from 'react';
import { useSelector } from 'react-redux';
import { CompetitorResultsListProps } from './types';
import { List } from '@components';
import { selectContestsList } from '@pages/Competitor/selector';
import ComponentContent from '@layouts/ComponentContent';
import CompetitorResultsListTile from './CompetitorResultsListTile';
import './CompetitorResultsList.scss';

const CompetitorResultsList: React.FunctionComponent<CompetitorResultsListProps> = ({
    history,
}) => {
    const { data, isFetching, isInitialized } = useSelector(selectContestsList);

    const loadMore = (start: number, stop: number, resolve: () => void) =>
        resolve();

    const loadTableDimensions = (
        items: any[] = []
    ): { size: number; height: number; width: ReactText } => {
        // move this info to schema.ts
        const size = 150;
        const width = '100%';
        const height = items.length * size;

        return { size, width, height };
    };

    return (
        <ComponentContent showSpinner={!isInitialized}>
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
