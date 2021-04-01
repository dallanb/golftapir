import React, { useEffect, useState } from 'react';
import { Avatar as AntdAvatar } from 'antd';
import classnames from 'classnames';
import { AvatarProps } from './types';
import { getInitials, randomColourGenerator } from '@utils';
import './Avatar.less';

const Avatar: React.FunctionComponent<AvatarProps> = ({
    src,
    name = '',
    className,
    size,
    shape,
    style = {},
    border = false,
}) => {
    const [localSrc, setLocalSrc] = useState(src);

    useEffect(() => {
        if (
            (localSrc === undefined && src) ||
            (src === undefined && localSrc)
        ) {
            setLocalSrc(src);
        }
    }, [src]);

    const localStyle = localSrc
        ? style
        : {
              backgroundColor: randomColourGenerator(name),
              verticalAlign: 'middle',
              ...style,
          };
    const child = localSrc ? '' : getInitials(name);

    const onError = () => {
        setLocalSrc(undefined);
        return false;
    };
    const cx = classnames(className, { bordered: border });
    return (
        <AntdAvatar
            onError={onError}
            src={localSrc}
            className={cx}
            size={size}
            shape={shape}
            style={localStyle}
        >
            {child}
        </AntdAvatar>
    );
};

export default React.memo(Avatar);
