import React from 'react';
import { useSelector } from 'react-redux';
import { ContestParticipantsTableProps } from './types';
import { columnsSchema } from './schema';
import { Table } from '@components';
import './ContestParticipantsTable.scss';
import { Typography } from 'antd';
import {
    selectContestParticipants,
    selectIsFetching,
} from '@pages/Contest/selector';

const ContestParticipantsTable: React.FunctionComponent<ContestParticipantsTableProps> = () => {
    const loadMore = (start: number, stop: number, resolve: () => void) =>
        resolve();

    const loadTableDimensions = (
        items: any[]
    ): { size: number; height: number; width: number } => {
        const size = 50;
        const width = 350;
        const height = items.length * size;

        return { size, width, height };
    };

    const items = useSelector(selectContestParticipants);
    const isFetching = useSelector(selectIsFetching);

    return (
        <div className="contest-participants-table">
            <Typography.Title level={5} type="secondary">
                PARTICIPANTS
            </Typography.Title>
            <Table
                {...loadTableDimensions(items)}
                items={items}
                hasNextPage={false}
                loadNextPage={loadMore}
                isNextPageLoading={isFetching}
                minimumBatchSize={100}
                columnsSchema={columnsSchema}
            />
        </div>
    );
};
export default ContestParticipantsTable;
