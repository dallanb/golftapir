import { RouteComponentProps } from 'react-router-dom';
export interface ContestProps extends RouteComponentProps {
    fetchContestParticipants: (uuid: string) => void;
    data: any;
    isFetching: boolean;
}
