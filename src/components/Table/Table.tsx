import React from 'react';
import { TableProps } from './types';
import { useTable } from 'react-table';
import defaultRowRenderer from './defaultRowRenderer';
import './Table.less';

const Table: React.FunctionComponent<TableProps> = ({
    rowRenderer = defaultRowRenderer,
    header = true,
    columnsSchema,
    items,
    style,
}) => {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({
        data: items,
        columns: columnsSchema,
    });

    // Render the UI for your table
    return (
        <table {...getTableProps({ style })}>
            {header && (
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps()}>
                                    {column.render('Header')}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
            )}
            <tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                    prepareRow(row);
                    return rowRenderer({ row });
                })}
            </tbody>
        </table>
    );
};

export default Table;
