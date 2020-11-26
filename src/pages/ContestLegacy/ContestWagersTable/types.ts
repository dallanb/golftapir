export interface ContestWagersTableProps {
    items: any;
    isFetching: boolean;
}

export interface ContestWagersTableState {
    scrollState: { rowIndex: number; columnIndex: number };
}
