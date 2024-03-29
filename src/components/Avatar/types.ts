export interface AvatarProps {
    src?: string;
    name: string;
    className?: string;
    size?: number | 'small' | 'large' | 'default' | undefined;
    shape?: 'circle' | 'square';
    style?: any;
    border?: boolean;
}
