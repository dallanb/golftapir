export interface ContestLeaderboardProps {}
export interface ContestPageContentLeaderboardInterface {
    readonly isFetching: boolean;
    readonly isInitialized: boolean;
    readonly err?: Error;
    readonly data: any;
    readonly append: boolean;
    readonly accountsHash: any;
}
