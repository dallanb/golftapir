import { RouteComponentProps } from 'react-router';
import { MemberAppInterface } from '@apps/MemberApp/reducer';

export interface ContestMatchupProps extends RouteComponentProps {
    init: (contest: any) => void;
    terminate: () => void;
    approveScoreSheet: (uuid: string) => void;
    completeScore: (uuid: string) => void;
    title: string;
    description: string;
    sheet: any[];
    participants: any[];
    isInitialized: boolean;
    score_uuid: string;
}

export interface ContestMatchupState {
    contest: any;
}

export interface ContestMatchupPageInterface {
    readonly isFetching: boolean;
    readonly isInitialized: boolean;
    readonly err?: Error;
    readonly title: string;
    readonly description: string;
    readonly score: any;
    readonly contest: any;
    readonly participants: any;
}

export interface StateInterface {
    contestMatchupPage: ContestMatchupPageInterface;
}
