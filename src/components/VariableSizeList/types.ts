import React, { ReactText } from 'react';
import { ListChildComponentProps } from 'react-window';

export interface ListProps {
    rowRenderer?: React.FunctionComponent<ListChildComponentProps>;
    itemSize: (i: number) => number;
    hasNextPage: boolean;
    isNextPageLoading: boolean;
    items: any;
    loadNextPage?: (start: number, stop: number) => void | null;
    minimumBatchSize: number;
    listRef?: React.Ref<any>;
}
