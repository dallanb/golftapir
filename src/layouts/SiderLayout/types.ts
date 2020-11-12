import { ReactNode } from 'react';
import { AvatarProps } from '@components/Avatar/types';

export interface SiderLayoutProps {
    title?: ReactNode;
    showSpinner?: boolean;
    className?: string;
    avatar?: AvatarProps;
}

export interface SiderLayoutState {}
