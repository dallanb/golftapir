import { RouteComponentProps } from 'react-router';

export interface MemberAppLayoutProps extends RouteComponentProps<any> {
    name: string;
    avatar?: string;
    menuRoutes: any;
}
export interface MemberAppLayoutState {
    selectedKeys: string[];
}
