import React, { PropsWithChildren } from 'react';
import { ListChildComponentProps } from 'react-window';

export interface TableProps {
    rowRenderer?: React.FunctionComponent<RowRendererProps>;
    columnsSchema: any;
    size: number;
    height?: number;
    width?: number;
    hasNextPage: boolean;
    isNextPageLoading: boolean;
    items: any;
    loadNextPage: (start: number, stop: number, resolve: () => void) => void;
    minimumBatchSize: number;
}

export interface RowRendererProps {
    props: PropsWithChildren<ListChildComponentProps>;
    prepareRow: any;
}
