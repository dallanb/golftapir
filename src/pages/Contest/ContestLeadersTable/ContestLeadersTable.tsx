import React from 'react';
import { useSelector } from 'react-redux';
import { Typography } from 'antd';
import { ContestLeadersTableProps } from './types';
import { columnsSchema } from './schema';
import { selectIsFetching, selectSheet } from '../selector';
import { Table } from '@components';
import './ContestLeadersTable.scss';

const ContestLeadersTable: React.FunctionComponent<ContestLeadersTableProps> = ({}) => {
    const loadMore = (start: number, stop: number, resolve: () => void) =>
        resolve();

    const loadTableDimensions = (items: any[]) => {};

    const renderContent = (items: any[], isFetching: boolean) => {
        if (!items || !items.length) {
            return 'NA';
        }
        return (
            <Table
                size={75}
                height={150}
                width={300}
                items={items}
                hasNextPage={false}
                loadNextPage={loadMore}
                isNextPageLoading={isFetching}
                minimumBatchSize={100}
                columnsSchema={columnsSchema}
            />
        );
    };

    const items = useSelector(selectSheet);
    const isFetching = useSelector(selectIsFetching);
    return (
        <div className="contest-leaders-table">
            <Typography.Title level={5} type="secondary">
                LEADERS
            </Typography.Title>
            {renderContent(items, isFetching)}
        </div>
    );
};

export default ContestLeadersTable;
