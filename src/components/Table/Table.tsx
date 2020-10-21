import React from 'react';
import { useTable, useBlockLayout } from 'react-table';
import { TableProps } from './types';
import { List } from '@components';
import defaultRowRenderer from './defaultRowRenderer';
import './Table.scss';

const Table: React.FunctionComponent<TableProps> = ({
    items,
    columnsSchema,
    rowRenderer = defaultRowRenderer,
    ...restProps
}) => {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        headers,
        rows,
        prepareRow,
    } = useTable(
        {
            data: items,
            columns: columnsSchema,
        },
        useBlockLayout
    );
    return (
        <div {...getTableProps()} className="table">
            <div>
                {headerGroups.map((headerGroup) => (
                    <div {...headerGroup.getHeaderGroupProps()} className="tr">
                        {headerGroup.headers.map((column) => (
                            <div {...column.getHeaderProps()} className="th">
                                {column.render('Header')}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <div {...getTableBodyProps()}>
                <List
                    items={rows}
                    rowRenderer={(props) => rowRenderer({ props, prepareRow })}
                    {...restProps}
                />
            </div>
        </div>
    );
};

export default Table;
