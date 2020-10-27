export interface ContestActionsProps {
    actions: any;
}

export interface contestActionRendererProps {
    actions: any;
    uuid: string;
    status: string;
    participantSheet: any;
    isOwner: boolean;
}

export interface renderActionResponse {
    show: boolean;
    enabled: boolean;
    onClick: () => void;
}
