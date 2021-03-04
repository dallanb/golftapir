import React from 'react';
import { Button, Card } from 'antd';
import memoize from 'memoize-one';
import { get as _get } from 'lodash';
import classnames from 'classnames';
import { NotificationsListTileProps } from './types';
import { formatTimeString, getAvatarSrc } from './utils';
import { Avatar } from '@components';
import TileActions from './TileActions';
import './NotificationsListTile.less';

const NotificationsListTile: React.FunctionComponent<NotificationsListTileProps> = ({
    props: { index, style, data },
    onClick,
    actions,
}) => {
    const isEven = index % 2;
    const item = _get(data, [index], undefined);
    const name = _get(item, ['topic'], 'Loading...');
    const message = _get(item, ['message'], 'Loading...');
    const date = _get(item, ['ctime'], undefined);
    const read = _get(item, ['read'], true);
    const src = item && getAvatarSrc(item);

    const cx = classnames({ unread: !read });
    const cardCx = classnames('notifications-list-tile-card', {
        filled: isEven,
    });

    const markAsRead = (_id: string) => {
        actions.markAsRead(_id);
    };

    const markAsUnread = (_id: string) => {
        actions.markAsUnread(_id);
    };

    const markAsArchived = (_id: string) => {
        actions.markAsArchived(_id);
    };

    return (
        <div style={style} key={index} className="notifications-list-tile-view">
            <Card bordered={false} className={cardCx}>
                <div className="notifications-list-tile-content">
                    <div
                        className="notifications-list-tile-content-main"
                        onClick={() => onClick(item)}
                    >
                        <div className="notifications-list-tile-content-avatar">
                            <Avatar
                                src={src}
                                name={name}
                                size={48}
                                shape="square"
                            />
                        </div>
                        <div className="notifications-list-tile-content-info">
                            <div className="notifications-list-tile-content-message">
                                <div className={cx}>{message}</div>
                            </div>
                            <div className="notifications-list-tile-content-date">
                                {formatTimeString(date)}
                            </div>
                        </div>
                    </div>
                    <div className="notifications-list-tile-content-side">
                        <TileActions
                            item={item}
                            markAsRead={markAsRead}
                            markAsUnread={markAsUnread}
                            markAsArchived={markAsArchived}
                        />
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default NotificationsListTile;
