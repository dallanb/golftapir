import { Row } from 'react-table';
import { RowRendererProps } from '../List/types';
import Grid from '@components/Grid/Grid';
import React from 'react';

export interface GridProps {
    // are there still more items to load?
    hasNextPage: boolean;
    // Callback function that knows how to load more items
    loadMoreItems: (
        startIndex: number,
        stopIndex: number,
        resolve: () => void
    ) => void;
    //Callback function determining if the item at an index is loaded
    isItemLoading: boolean;
    scrollState: {
        rowIndex: number;
        columnIndex: number;
    };
    setScrollRowAndColumn: (rowIndex: number, columnIndex: number) => void;
    itemCount: number;
    items: any;
    rowItemRenderer?: RowItemRendererProps;
    columnsSchema: any[];
    columnWidth: number;
    rowHeight: number;
    columnCount: number;
    height: number;
    rowCount: number;
    width: number;
}

export interface RowItemProps {
    rows: Row<any>[];
    prepareRows: (row: Row<any>[]) => void;
}

export interface RowItemRendererProps {
    (props: {
        rowIndex: any;
        columnIndex: any;
        style: any;
        data: any;
    }): JSX.Element;
}
