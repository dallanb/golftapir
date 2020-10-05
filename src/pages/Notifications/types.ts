import { RouteComponentProps } from 'react-router-dom';
export interface NotificationsProps extends RouteComponentProps<any> {
    title: string;
    description: string;
    init: () => void;
    terminate: () => void;
    isInitialized: boolean;
    history: any;
}

export interface StateInterface {
    notificationsPage: NotificationsPageInterface;
}

export interface NotificationsPageInterface {
    readonly isFetching: boolean;
    readonly isInitialized: boolean;
    readonly err?: Error;
    readonly title: string;
    readonly description: string;
    readonly notificationsList: {
        data: any;
        metadata: any;
        isFetching: boolean;
        append: boolean;
    };
}
