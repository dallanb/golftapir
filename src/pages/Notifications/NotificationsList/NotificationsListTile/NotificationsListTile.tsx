import React from 'react';
import { Button, Card } from 'antd';
import { get as _get } from 'lodash';
import { NotificationsListTileProps } from './types';
import { topicToRouteMapper } from '@utils';
import './NotificationsListTile.scss';

const NotificationsListTile: React.FunctionComponent<NotificationsListTileProps> = ({
    props: { index, style, data },
    history,
}) => {
    const item = _get(data, [index], undefined);
    const handleClick = (item: any) => {
        history.push(`/app${topicToRouteMapper(item.topic, item.key, item)}`);
        // pass in a prop to this component that can be used to notify the notification api that this notification has been
        // read
    };

    return (
        <Card style={style} key={index} className="contest-list-tile-view">
            <div className="contest-list-tile-content">
                {item ? item.message : 'Loading...'}
            </div>
            <div className="contest-list-tile-button">
                <Button onClick={() => handleClick(item)}>View</Button>
            </div>
        </Card>
    );
};

export default NotificationsListTile;
