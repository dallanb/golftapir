export interface ContestParticipantsTableProps {
    items: any;
    isFetching: boolean;
}

export interface ContestParticipantsTableState {
    scrollState: { rowIndex: number; columnIndex: number };
}
