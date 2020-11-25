export interface CompetitorHeaderProps {}
export interface CompetitorPageHeaderInterface {
    readonly isInitialized: boolean;
    readonly err?: Error;
    readonly title: string;
    readonly subTitle: string;
    readonly avatar: {
        name: string;
        src?: string;
        size: number;
    };
}
