import { ReactNode } from 'react';
import { AvatarProps } from '@components/Avatar/types';

export interface SiderLayoutHeaderProps {
    title?: ReactNode;
    subTitle?: ReactNode;
    avatar?: AvatarProps;
    extra?: ReactNode | ReactNode[];
    className?: string;
    showSpinner?: boolean;
}
