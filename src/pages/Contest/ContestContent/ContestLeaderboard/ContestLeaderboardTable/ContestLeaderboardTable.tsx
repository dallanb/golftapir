import React, { ReactElement, ReactText } from 'react';
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
        Object.assign({}, participant, { uuid })
    );

    // TODO: MAKE THIS REFACTORED LIKE THE REST OF THE LIST COMPONENTS
    const loadTableDimensions = (
        items: any[]
    ): { size: number; height: number } => {
        // move this info to schema.tsx
        const size = 50;
        const height = items.length * size;

        return { size, height };
    };

    return (
        <div className="contest-leaderboard-table">
            <div className="table-wrap">
                <Table
                    {...loadTableDimensions(items)}
                    items={items}
                    hasNextPage={false}
                    isNextPageLoading={false}
                    minimumBatchSize={10}
                    columnsSchema={columnsSchema}
                />
            </div>
        </div>
    );
};

export default ContestLeaderboardTable;
