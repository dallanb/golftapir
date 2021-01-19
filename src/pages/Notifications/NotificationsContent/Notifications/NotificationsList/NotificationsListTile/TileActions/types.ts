export interface TileActionsProps {
    item: any;
    markAsRead: (_id: string) => void;
    markAsUnread: (_id: string) => any;
    markAsArchived: (_id: string) => any;
}
