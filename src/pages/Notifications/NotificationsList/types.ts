export interface NotificationsListProps {
    data: any;
    metadata: any;
    isFetching: boolean;
    fetchNotifications: (options: any) => any;
    history: any;
    markNotificationAsRead: (_id: string) => void;
}