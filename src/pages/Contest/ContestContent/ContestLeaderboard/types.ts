export interface ContestLeaderboardProps {}
export interface ContestPageContentContestLeaderboardInterface {
    readonly isInitialized: boolean;
    readonly isRefreshing: boolean;
    readonly err?: Error;
    readonly sheets: any;
    readonly rankingLookup: any;
}
