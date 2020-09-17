import React from 'react';
import { ListChildComponentProps } from 'react-window';

export interface ListProps {
    rowRenderer?: React.FunctionComponent<ListChildComponentProps>;
    size: number;
    hasNextPage: boolean;
    isNextPageLoading: boolean;
    items: any;
    loadNextPage: (start: number, stop: number, resolve: () => void) => void;
    minimumBatchSize: number;
    height?: number;
    width?: number;
}
