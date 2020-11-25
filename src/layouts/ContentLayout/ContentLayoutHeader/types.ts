import { ReactElement, ReactNode } from 'react';
import { Tag } from 'antd';
import { AvatarProps } from '@components/Avatar/types';

export interface ContentLayoutHeaderProps {
    title?: ReactNode;
    subTitle?: ReactNode;
    tags?: ReactElement<typeof Tag> | ReactElement<typeof Tag>[];
    extra?: ReactNode | ReactNode[];
    avatar?: AvatarProps;
}
