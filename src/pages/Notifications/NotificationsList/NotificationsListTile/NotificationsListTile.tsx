import React from 'react';
import { Button, Card } from 'antd';
import { get as _get } from 'lodash';
import { NotificationsListTileProps } from './types';
import './NotificationsListTile.scss';

const NotificationsListTile: React.FunctionComponent<NotificationsListTileProps> = ({
    props: { index, style, data },
    history,
}) => {
    const item = _get(data, [index], undefined);
    const handleClick = (uuid: string) => {
        history.push(`/app/notifications/${uuid}`);
        // pass in a prop to this component that can be used to notify the notification api that this notification has been
        // read
    };

    return (
        <Card style={style} key={index} className="contest-list-tile-view">
            <div className="contest-list-tile-content">
                {item ? item.message : 'Loading...'}
            </div>
            <div className="contest-list-tile-button">
                <Button onClick={() => handleClick(_get(item, ['uuid'], null))}>
                    View
                </Button>
            </div>
        </Card>
    );
};

export default NotificationsListTile;
