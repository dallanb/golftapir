import React from 'react';
import { useSelector } from 'react-redux';
import { Typography } from 'antd';
import { ContestLeadersTableProps } from './types';
import { columnsSchema } from './schema';
import {
    selectContest,
    selectContestParticipants,
    selectIsFetching,
    selectSheet,
} from '../selector';
import { Table } from '@components';
import './ContestLeadersTable.scss';

const ContestLeadersTable: React.FunctionComponent<ContestLeadersTableProps> = ({}) => {
    const loadMore = (start: number, stop: number, resolve: () => void) =>
        resolve();

    const loadTableDimensions = (
        items: any[]
    ): { size: number; height: number; width: number } => {
        // move this info to schema.ts
        const size = 50;
        const width = 750;
        const height = items.length * size;

        return { size, width, height };
    };

    const renderContent = (items: any[], isFetching: boolean) => {
        if (!items || !items.length) {
            return 'NA';
        }
        return (
            <Table
                {...loadTableDimensions(items)}
                items={items}
                hasNextPage={false}
                loadNextPage={loadMore}
                isNextPageLoading={isFetching}
                minimumBatchSize={100}
                columnsSchema={columnsSchema}
            />
        );
    };

    const participants = useSelector(selectContestParticipants);
    const items = Object.entries(participants).map(
        ([uuid, val]: [uuid: string, val: any]) => {
            return { uuid, ...val };
        }
    );
    const isFetching = useSelector(selectIsFetching);
    return (
        <div className="contest-leaders-table">
            {renderContent(items, isFetching)}
        </div>
    );
};

export default ContestLeadersTable;
