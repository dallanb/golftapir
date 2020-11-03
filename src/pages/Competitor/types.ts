import { RouteComponentProps } from 'react-router';
import { MemberAppInterface } from '@apps/MemberApp/reducer';

export interface CompetitorProps extends RouteComponentProps {
    init: (uuid: string) => void;
    terminate: () => void;
    title: string;
    description: string;
    isInitialized: boolean;
}

export interface CompetitorState {
    uuid: string;
}

export interface CompetitorPageInterface {
    readonly isFetching: boolean;
    readonly isInitialized: boolean;
    readonly err?: Error;
    readonly title: string;
    readonly description: string;
    readonly account: any;
    readonly contestsList: {
        data: any;
        metadata: any;
        isFetching: boolean;
        isInitialized: boolean;
        append: boolean;
    };
}

export interface StateInterface {
    base: MemberAppInterface;
    competitorPage: CompetitorPageInterface;
}
