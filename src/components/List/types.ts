export interface ListProps {
    rowRenderer?: RowRendererProps;
    itemCount: number;
    itemSize: number;
    itemData: any;
}

export interface ListState {}

export interface RowRendererProps {
    (props: { index: any; style: any; data: any }): JSX.Element;
}
