import { ReactElement, ReactNode } from 'react';
import { AvatarProps } from '@components/Avatar/types';
import { Tag } from 'antd';

export interface ContentLayoutProps {
    title?: string;
    subTitle?: string;
    showSpinner?: boolean;
    className?: string;
    tags?: ReactElement<typeof Tag> | ReactElement<typeof Tag>[];
    extra?: ReactNode[];
    avatar?: AvatarProps;
}

export interface ContentLayoutState {}
