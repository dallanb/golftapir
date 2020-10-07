import { RouteComponentProps } from 'react-router';
import { MemberAppInterface } from '@apps/MemberApp/reducer';

export interface HomeProps extends RouteComponentProps {
    init: () => void;
    terminate: () => void;
    title: string;
    description: string;
    isInitialized: boolean;
    first_name: string;
    last_name: string;
    s3_filename: string;
}
export interface HomePageInterface {
    readonly isFetching: boolean;
    readonly isInitialized: boolean;
    readonly err?: Error;
    readonly title: string;
    readonly description: string;
}

export interface StateInterface {
    base: MemberAppInterface;
    homePage: HomePageInterface;
}
