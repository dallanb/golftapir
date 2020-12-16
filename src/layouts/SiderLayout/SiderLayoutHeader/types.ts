import { ReactNode } from 'react';
import { AvatarProps } from '@components/Avatar/types';

export interface SiderLayoutHeaderProps {
    title?: ReactNode;
    avatar?: AvatarProps;
    extra?: ReactNode | ReactNode[];
}
