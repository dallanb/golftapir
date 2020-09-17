import React from 'react';
import { Avatar as AntdAvatar } from 'antd';
import { AvatarProps } from './types';
import { getInitials, randomColourGenerator } from '@utils';

const Avatar: React.FunctionComponent<AvatarProps> = ({ src, name = '' }) => {
    const props: {
        src?: string;
        style?: { backgroundColor: string; verticalAlign: string };
    } = {};
    let child = '';
    if (src) {
        props['src'] = src;
    } else {
        props['style'] = {
            backgroundColor: randomColourGenerator(),
            verticalAlign: 'middle',
        };
        child = getInitials(name);
    }
    return <AntdAvatar {...props}>{child}</AntdAvatar>;
};

export default Avatar;
