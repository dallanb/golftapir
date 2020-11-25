export interface CompetitorSiderHeaderProps {}
export interface CompetitorPageSiderHeaderInterface {
    readonly isFetching: boolean;
    readonly isInitialized: boolean;
    readonly err?: Error;
    readonly title: string;
    readonly avatar: {
        name: string;
        src?: string;
        size: number;
    };
}
