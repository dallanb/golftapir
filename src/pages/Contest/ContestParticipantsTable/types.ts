export interface ContestParticipantsTableProps {
    data: any;
    isFetching: boolean;
}

export interface ContestParticipantsTableState {
    scrollState: { rowIndex: number; columnIndex: number };
}
