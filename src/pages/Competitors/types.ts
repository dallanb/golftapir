import { RouteComponentProps } from 'react-router';
import { MemberAppInterface } from '@apps/MemberApp/reducer';

export interface CompetitorsProps extends RouteComponentProps {
    init: () => void;
    terminate: () => void;
    title: string;
    description: string;
    isInitialized: boolean;
}
export interface CompetitorsPageInterface {
    readonly isFetching: boolean;
    readonly isInitialized: boolean;
    readonly err?: Error;
    readonly title: string;
    readonly description: string;
}

export interface StateInterface {
    base: MemberAppInterface;
    competitorsPage: CompetitorsPageInterface;
}
