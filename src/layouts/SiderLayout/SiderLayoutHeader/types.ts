import { ReactElement, ReactNode } from 'react';
import { Tag } from 'antd';
import { AvatarProps } from '@components/Avatar/types';

export interface SiderLayoutHeaderProps {
    title?: ReactNode;
    avatar?: AvatarProps;
}
