export interface ContestHeaderProps {}
export interface ContestPageHeaderInterface {
    readonly isInitialized: boolean;
    readonly err?: Error;
    readonly avatar: {
        name: string;
        src?: string;
        size: number;
    };
}
