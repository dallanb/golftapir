import React, { ReactText } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { CompetitorResultsListProps } from './types';
import { List } from '@components';
import { selectListData, selectListIsFetching } from '../selector';
import CompetitorResultsListTile from './CompetitorResultsListTile';
import './CompetitorResultsList.scss';

const CompetitorResultsList: React.FunctionComponent<CompetitorResultsListProps> = () => {
    const history = useHistory();
    const data = useSelector(selectListData);
    const isFetching = useSelector(selectListIsFetching);

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
        <List
            {...loadTableDimensions(data)}
            items={data}
            hasNextPage={false}
            isNextPageLoading={isFetching}
            minimumBatchSize={10}
            rowRenderer={(props) =>
                CompetitorResultsListTile({ props, history })
            }
        />
    );
};

export default CompetitorResultsList;
