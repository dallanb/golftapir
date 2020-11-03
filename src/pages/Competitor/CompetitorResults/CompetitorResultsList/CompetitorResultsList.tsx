import React from 'react';
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

    return (
        <ComponentContent showSpinner={!isInitialized}>
            <List
                size={150}
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
