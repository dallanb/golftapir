import React, { ReactElement, ReactText } from 'react';
import { ListChildComponentProps } from 'react-window';

export interface ListProps {
    rowRenderer?: React.FunctionComponent<ListChildComponentProps>;
    empty?: JSX.Element;
    size: number;
    hasNextPage: boolean;
    isNextPageLoading: boolean;
    items: any;
    loadNextPage?: (start: number, stop: number) => void | null;
    minimumBatchSize: number;
    height?: ReactText;
    width?: ReactText;
    emptyDescription?: string;
}
