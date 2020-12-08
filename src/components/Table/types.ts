import React, { PropsWithChildren, ReactText } from 'react';
import { ListChildComponentProps } from 'react-window';

export interface TableProps {
    rowRenderer?: React.FunctionComponent<RowRendererProps>;
    rowSubRenderer?: React.FunctionComponent<RowRendererProps>;
    columnsSchema: any;
    initialState?: any;
    size: number;
    height?: number;
    hasNextPage: boolean;
    isNextPageLoading: boolean;
    items: any;
    loadNextPage?: (start: number, stop: number) => null;
    minimumBatchSize: number;
}

export interface RowRendererProps {
    props: PropsWithChildren<ListChildComponentProps>;
    prepareRow: any;
}
