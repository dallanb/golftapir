import { Row } from 'react-table';
import { RowRendererProps } from '../List/types';

export interface GridProps {
    // are there still more items to load?
    hasNextPage: boolean;
    // Callback function that knows how to load more items
    loadMoreItems: (startIndex: number, stopIndex: number) => Promise<any>;
    //Callback function determining if the item at an index is loaded
    isItemLoaded: (index: number) => boolean;
    scrollState: {
        rowIndex: number;
        columnIndex: number;
    };
    setScrollRowAndColumn: (rowIndex: number, columnIndex: number) => void;
    itemCount: number;
    itemData: RowItemProps;
    rowItemRenderer?: RowItemRendererProps;
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
