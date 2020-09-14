export interface ContestParticipantsTableProps {
    data: any;
    isFetching: boolean;
    fetchContestParticipants: (uuid: string) => void;
}

export interface ContestParticipantsTableState {
    scrollState: { rowIndex: number; columnIndex: number };
}
