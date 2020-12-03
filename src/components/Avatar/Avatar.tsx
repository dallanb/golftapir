import React from 'react';
import { Avatar as AntdAvatar } from 'antd';
import { AvatarProps } from './types';
import { getInitials, randomColourGenerator } from '@utils';

const Avatar: React.FunctionComponent<AvatarProps> = ({
    src,
    name = '',
    className,
    size,
}) => {
    const props: {
        src?: AvatarProps['src'];
        style?: { backgroundColor: string; verticalAlign: string };
        className?: AvatarProps['className'];
        size?: AvatarProps['size'];
    } = {
        className,
        size,
    };
    let child = '';
    if (src) {
        props['src'] = src;
    } else {
        props['style'] = {
            backgroundColor: randomColourGenerator(name),
            verticalAlign: 'middle',
        };
        child = getInitials(name);
    }
    return <AntdAvatar {...props}>{child}</AntdAvatar>;
};

export default React.memo(Avatar);
