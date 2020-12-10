import React from 'react';
import { useSelector } from 'react-redux';
import { get as _get } from 'lodash';
import { ContestLeaderboardTableProps } from './types';
import { VirtualTable } from '@components';
import { columnsSchema } from './schema';
import { selectRankingLookup, selectSheets } from '../selector';
import renderRow from './renderRow';
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

    const itemSize = (row: any): number =>
        _get(row, ['isExpanded']) ? 200 : 50;
    const bodyStyle = { height: items.length * 50 + 150 };

    return (
        <div className="contest-leaderboard-table">
            <div className="table-wrap">
                <VirtualTable
                    itemSize={itemSize}
                    bodyStyle={bodyStyle}
                    items={items}
                    hasNextPage={false}
                    isNextPageLoading={false}
                    minimumBatchSize={10}
                    columnsSchema={columnsSchema}
                    initialState={initialState}
                    rowRenderer={renderRow}
                />
            </div>
        </div>
    );
};

export default React.memo(ContestLeaderboardTable);
