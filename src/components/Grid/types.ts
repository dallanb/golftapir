import { Row } from 'react-table';
import React from 'react';

export interface GridProps {
    // are there still more items to load?
    hasNextPage: boolean;
    // Callback function that knows how to load more items
    loadMoreItems: (
        startIndex: number,
        stopIndex: number,
        resolve: (key: any) => void
    ) => void;
    //Callback function determining if the item at an index is loaded
    isItemLoading: boolean;
    scrollState: {
        rowIndex: number;
        columnIndex: number;
    };
    setScrollRowAndColumn: (rowIndex: number, columnIndex: number) => void;
    itemCount: number;
    itemData: any;
    rowItemRenderer?: React.FunctionComponent<RowItemRendererProps>;
    columnWidth: number;
    rowHeight: number;
    columnCount: number;
    height: number;
    rowCount: number;
    width: number;
}

export interface RowItemRendererProps {
    rowIndex: any;
    columnIndex: any;
    style: any;
    data: any;
}
