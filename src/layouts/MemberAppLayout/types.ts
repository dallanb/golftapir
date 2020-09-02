import { RouteComponentProps } from 'react-router';

export interface MemberAppLayoutProps extends RouteComponentProps<any> {}
export interface MemberAppLayoutState {
    collapsed: boolean;
    selectedKeys: string[];
}
