import React, { ReactElement, ReactText } from 'react';
import { useSelector } from 'react-redux';
import { get as _get } from 'lodash';
import { ContestLeaderboardTableProps } from './types';
import { Table } from '@components';
import { columnsSchema } from './schema';
import { selectRankingLookup, selectSheets } from '../selector';
import './ContestLeaderboardTable.scss';

const ContestLeaderboardTable: React.FunctionComponent<ContestLeaderboardTableProps> = ({}) => {
    const sheets = useSelector(selectSheets);
    const rankingLookup = useSelector(selectRankingLookup);
    const items = Object.entries(sheets).map(([uuid, participant]: any) => {
        const rank = _get(rankingLookup, [participant.score], undefined);
        return Object.assign({}, participant, { uuid }, rank);
    });
    const initialState = {
        sortBy: [{ id: 'rank' }],
    };
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
                    initialState={initialState}
                />
            </div>
        </div>
    );
};

export default React.memo(ContestLeaderboardTable);
