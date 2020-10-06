import React from 'react';
import { Button, Card } from 'antd';
import { get as _get } from 'lodash';
import { WagersListTileProps } from './types';
import './WagersListTile.scss';

const WagersListTile: React.FunctionComponent<WagersListTileProps> = ({
    props: { index, style, data },
    history,
}) => {
    const item = _get(data, [index], undefined);
    const handleClick = (uuid: string) => {
        history.push(`/app/wagers/${uuid}`);
    };

    return (
        <Card style={style} key={index} className="wager-list-tile-view">
            <div className="wager-list-tile-content">
                {item ? item.name : 'Loading...'}
            </div>
            <div className="wager-list-tile-button">
                <Button onClick={() => handleClick(_get(item, ['uuid'], null))}>
                    View
                </Button>
            </div>
        </Card>
    );
};

export default WagersListTile;
