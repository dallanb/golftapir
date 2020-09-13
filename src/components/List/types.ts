import { RouteComponentProps } from 'react-router-dom';

export interface ListProps extends RouteComponentProps<any> {
    rowRenderer?: RowRendererProps;
    size: number;
    hasNextPage: boolean;
    isNextPageLoading: boolean;
    items: any;
    loadNextPage: (start: number, stop: number, resolve: () => void) => void;
    minimumBatchSize: number;
}

export interface ListState {}

export interface RowRendererProps {
    (
        props: { index: any; style: any; data: any },
        items: any,
        history: any
    ): JSX.Element;
}
