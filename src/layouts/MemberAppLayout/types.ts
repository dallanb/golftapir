import { RouteComponentProps } from 'react-router';

export interface MemberAppLayoutProps extends RouteComponentProps<any> {
    name: string;
    avatar?: string;
}
export interface MemberAppLayoutState {
    selectedKeys: string[];
}
