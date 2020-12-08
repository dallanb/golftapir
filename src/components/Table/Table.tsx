import React from 'react';
import { useTable, useBlockLayout, useSortBy, useExpanded } from 'react-table';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import { TableProps } from './types';
import { List } from '@components';
import defaultRowRenderer from './defaultRowRenderer';
import './Table.scss';

const Table: React.FunctionComponent<TableProps> = ({
    items,
    columnsSchema,
    initialState,
    rowRenderer = defaultRowRenderer,
    ...restProps
}) => {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable(
        {
            data: items,
            columns: columnsSchema,
            initialState,
        },
        useBlockLayout,
        useSortBy,
        useExpanded
    );

    const renderSortButtons = (column: any) => {
        if (column.isSorted) {
            if (column.isSortedDesc) {
                return <UpOutlined />;
            } else {
                return <DownOutlined />;
            }
        }
        return '';
    };

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
                                    ...column.getSortByToggleProps(),
                                })}
                            >
                                {column.render('Header')}
                                <span className="table-head-sort">
                                    {renderSortButtons(column)}
                                </span>
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
