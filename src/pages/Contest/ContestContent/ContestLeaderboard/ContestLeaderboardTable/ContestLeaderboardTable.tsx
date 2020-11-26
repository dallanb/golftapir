import React from 'react';
import { useSelector } from 'react-redux';
import { ContestLeaderboardTableProps } from './types';
import { Table } from '@components';
import { columnsSchema } from './schema';
import { selectData } from '@pages/Contest/selector';
import './ContestLeaderboardTable.scss';

const ContestLeaderboardTable: React.FunctionComponent<ContestLeaderboardTableProps> = ({}) => {
    const {
        contest: { participants },
    } = useSelector(selectData);
    const items = Object.entries(participants).map(([uuid, participant]: any) =>
        Object.assign(participant, { uuid })
    );

    const loadMore = (start: number, stop: number, resolve: () => void) =>
        resolve();

    const loadTableDimensions = (
        items: any[]
    ): { size: number; height: number; width: number } => {
        // move this info to schema.tsx
        const size = 50;
        const width = 750;
        const height = items.length * size;

        return { size, width, height };
    };

    return (
        <Table
            {...loadTableDimensions(items)}
            items={items}
            hasNextPage={false}
            loadNextPage={loadMore}
            isNextPageLoading={false}
            minimumBatchSize={100}
            columnsSchema={columnsSchema}
        />
    );
};

export default ContestLeaderboardTable;
