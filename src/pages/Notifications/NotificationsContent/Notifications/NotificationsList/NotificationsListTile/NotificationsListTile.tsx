import React from 'react';
import { Button, Card } from 'antd';
import { get as _get } from 'lodash';
import { NotificationsListTileProps } from './types';
import './NotificationsListTile.scss';
import memoize from 'memoize-one';
import { Avatar } from '@components';
import { getAvatarSrc } from './utils';

const NotificationsListTile: React.FunctionComponent<NotificationsListTileProps> = ({
    props: { index, style, data },
    onClick,
}) => {
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

    return (
        <Card
            style={style}
            key={index}
            className="notifications-list-tile-view"
        >
            <div className="notifications-list-tile-content">
                <div className="notifications-list-tile-content-avatar">
                    <Avatar src={src} name="" size={48} />
                </div>
                <div className="notifications-list-tile-content-message">
                    {renderMessage(item)}
                </div>
            </div>
            <div className="notifications-list-tile-button">
                <Button onClick={() => onClick(item)}>View</Button>
            </div>
        </Card>
    );
};

export default NotificationsListTile;
