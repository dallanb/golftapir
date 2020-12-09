import React from 'react';
import { useTable, useSortBy, useExpanded, useFlexLayout } from 'react-table';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import { get as _get } from 'lodash';
import { TableProps } from './types';
import { VariableSizeList } from '@components';
import defaultRowRenderer from './defaultRowRenderer';
import './Table.scss';

const Table: React.FunctionComponent<TableProps> = ({
    items,
    columnsSchema,
    initialState,
    rowRenderer = defaultRowRenderer,
    bodyStyle,
    size,
    expandedSize,
    ...restProps
}) => {
    const listRef = React.useRef(null);
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
        useFlexLayout,
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

    const loadItemSize = (row: any): number =>
        _get(row, ['isExpanded']) ? expandedSize : size;

    return (
        <div {...getTableProps()} className="table">
            <div className="thead">
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
            <div
                className="tbody"
                {...getTableBodyProps({
                    style: bodyStyle,
                })}
            >
                <VariableSizeList
                    items={rows}
                    rowRenderer={(props) =>
                        rowRenderer({ props, prepareRow, listRef })
                    }
                    itemSize={(i) => loadItemSize(rows[i])}
                    listRef={listRef}
                    {...restProps}
                />
            </div>
        </div>
    );
};

export default Table;
