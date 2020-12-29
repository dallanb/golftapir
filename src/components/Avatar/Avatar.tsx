import React from 'react';
import { Avatar as AntdAvatar } from 'antd';
import { AvatarProps } from './types';
import { getInitials, randomColourGenerator } from '@utils';

const Avatar: React.FunctionComponent<AvatarProps> = ({
    src,
    name = '',
    className,
    size,
    shape,
    style = {},
}) => {
    const props: {
        src?: AvatarProps['src'];
        style?: { backgroundColor: string; verticalAlign: string };
        className?: AvatarProps['className'];
        size?: AvatarProps['size'];
        shape?: AvatarProps['shape'];
    } = {
        className,
        size,
        shape,
        style,
    };
    let child = '';
    if (src) {
        props['src'] = src;
    } else {
        props['style'] = {
            backgroundColor: randomColourGenerator(name),
            verticalAlign: 'middle',
            ...style,
        };
        child = getInitials(name);
    }
    console.log(props);
    return <AntdAvatar {...props}>{child}</AntdAvatar>;
};

export default React.memo(Avatar);
