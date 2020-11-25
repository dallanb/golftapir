export interface CompetitorResultsProps {}

export interface CompetitorPageContentCompetitorResultsInterface {
    readonly isFetching: boolean;
    readonly isInitialized: boolean;
    readonly err?: Error;
    readonly data: any;
    readonly metadata: any;
    readonly append: boolean;
}
