export interface ContestsCreateProps {
    isInitialized: boolean;
    title: string;
    description: string;
    init: () => void;
    terminate: () => void;
}

export interface StateProps {
    contestsCreatePage: ContestsCreatePageInterface;
}

export interface ContestsCreatePageInterface {
    readonly isFetching: boolean;
    readonly isInitialized: boolean;
    readonly err?: Error;
    readonly title: string;
    readonly description: string;
    readonly createFormInitialValues: any;
    readonly createFormSearchParticipants: any[];
}
