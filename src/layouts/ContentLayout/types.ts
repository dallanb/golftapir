import { ReactElement, ReactNode } from 'react';
import { AvatarProps } from '@components/Avatar/types';
import { Tag } from 'antd';

export interface ContentLayoutProps {
    title?: ReactNode;
    subTitle?: ReactNode;
    showSpinner?: boolean;
    className?: string;
    tags?: ReactElement<typeof Tag> | ReactElement<typeof Tag>[];
    extra?: ReactNode | ReactNode[];
    avatar?: AvatarProps;
    sider?: ReactNode;
}

export interface ContentLayoutState {}
