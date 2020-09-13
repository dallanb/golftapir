import { RouteComponentProps } from 'react-router-dom';
export interface ViewContestProps extends RouteComponentProps {
    fetchContest: (uuid: string) => void;
    data: any;
}
