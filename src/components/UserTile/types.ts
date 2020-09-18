export interface UserTileProps {
    name: string;
    avatar?: string;
    menu: string | JSX.Element | (() => JSX.Element);
}
