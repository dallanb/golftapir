import { RouteComponentProps } from 'react-router-dom';

export interface BreadcrumbProps extends RouteComponentProps {
    route: string;
    state?: any;
    params?: any;
}
