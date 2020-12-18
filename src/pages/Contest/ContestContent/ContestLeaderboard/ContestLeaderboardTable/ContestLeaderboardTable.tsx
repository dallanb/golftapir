import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { get as _get } from 'lodash';
import { ContestLeaderboardTableProps } from './types';
import { VirtualTable } from '@components';
import columnsSchema from './schema';
import { selectRankingLookup, selectSheets } from '../selector';
import renderRow from './renderRow';
import './ContestLeaderboardTable.less';

const ContestLeaderboardTable: React.FunctionComponent<ContestLeaderboardTableProps> = ({}) => {
    const sheets = useSelector(selectSheets);
    const rankingLookup = useSelector(selectRankingLookup);
    const items = Object.entries(sheets).map(([uuid, participant]: any) => {
        const rank = _get(rankingLookup, [participant.score], undefined);
        return Object.assign({}, participant, { uuid }, rank);
    });
    const bodyStyle = { height: items.length * 50 + 205 };

    const initialState = {
        sortBy: [{ id: 'rank' }],
    };
    const itemSize = (row: any): number =>
        _get(row, ['isExpanded']) ? 255 : 50;

    return (
        <div className="contest-leaderboard-table">
            <div className="table-wrap">
                <VirtualTable
                    itemSize={itemSize}
                    className="contest-leaderboard-table-table"
                    headClassName="contest-leaderboard-table-header"
                    bodyClassName="contest-leaderboard-table-body"
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
