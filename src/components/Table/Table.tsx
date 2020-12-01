import React from 'react';
import { useTable, useBlockLayout } from 'react-table';
import { TableProps } from './types';
import { List } from '@components';
import defaultRowRenderer from './defaultRowRenderer';
import './Table.scss';
import { scrollbarWidth } from '@utils';

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
        rows,
        totalColumnsWidth,
        prepareRow,
    } = useTable(
        {
            data: items,
            columns: columnsSchema,
            // defaultColumn,
        },
        useBlockLayout
    );
    return (
        <div {...getTableProps()} className="table">
            <div>
                {headerGroups.map((headerGroup) => (
                    <div
                        {...headerGroup.getHeaderGroupProps({
                            style: { width: '100%' },
                        })}
                        className="tr"
                    >
                        {headerGroup.headers.map((column: any) => (
                            <div
                                {...column.getHeaderProps({
                                    className: column.className
                                        ? `th ${column.className}`
                                        : 'th',
                                })}
                            >
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
                    width={'100%'}
                    {...restProps}
                />
            </div>
        </div>
    );
};

export default Table;
