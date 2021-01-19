import React, { useState } from 'react';
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
    const [localSrc, setLocalSrc] = useState(src);
    const localStyle = localSrc
        ? style
        : {
              backgroundColor: randomColourGenerator(name),
              verticalAlign: 'middle',
              ...style,
          };
    const child = localSrc ? '' : getInitials(name);
    console.log(child);

    const onError = () => {
        setLocalSrc(undefined);
        return false;
    };
    return (
        <AntdAvatar
            onError={onError}
            src={localSrc}
            className={className}
            size={size}
            shape={shape}
            style={localStyle}
        >
            {child}
        </AntdAvatar>
    );
};

export default React.memo(Avatar);
