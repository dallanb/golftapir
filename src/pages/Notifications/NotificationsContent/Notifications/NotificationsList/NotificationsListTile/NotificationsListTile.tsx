import React from 'react';
import { Button, Card } from 'antd';
import { get as _get } from 'lodash';
import classnames from 'classnames';
import { NotificationsListTileProps } from './types';
import './NotificationsListTile.less';
import memoize from 'memoize-one';
import { Avatar } from '@components';
import { getAvatarSrc } from './utils';

const NotificationsListTile: React.FunctionComponent<NotificationsListTileProps> = ({
    props: { index, style, data },
    onClick,
}) => {
    const isEven = index % 2;
    const item = _get(data, [index], undefined);
    const src = getAvatarSrc(item);

    const renderMessage = memoize((item) => {
        let content = 'Loading...';
        let className = '';

        if (item.message) {
            content = item.message;
            if (!item.read) {
                className += 'unread';
            }
        }
        return <div className={className}>{content}</div>;
    });
    const cardCx = classnames('notifications-list-tile-card', {
        filled: !isEven,
    });

    return (
        <div style={style} key={index} className="notifications-list-tile-view">
            <Card
                bordered={false}
                onClick={() => onClick(item)}
                className={cardCx}
            >
                <div className="notifications-list-tile-content">
                    <div className="notifications-list-tile-content-avatar">
                        <Avatar src={src} name="" size={48} shape="square" />
                    </div>
                    <div className="notifications-list-tile-content-message">
                        {renderMessage(item)}
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default NotificationsListTile;
