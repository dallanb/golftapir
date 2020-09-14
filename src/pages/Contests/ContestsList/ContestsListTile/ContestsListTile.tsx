import React from 'react';
import { Button, Card } from 'antd';
import _ from 'lodash';
import { ContestsListTileProps } from './types';

import './ContestsListTile.scss';
let ContestsListTile: ContestsListTileProps;
ContestsListTile = ({ index, style, data }, history) => {
    const item = _.get(data, [index], undefined);
    const handleClick = (uuid: string) => {
        history.push(`/app/contests/${uuid}`);
    };

    return (
        <Card style={style} key={index} className="contest-list-tile-view">
            <div className="contest-list-tile-content">
                {item ? item.name : 'Loading...'}
            </div>
            <div className="contest-list-tile-button">
                <Button
                    onClick={() => handleClick(_.get(item, ['uuid'], null))}
                >
                    View
                </Button>
            </div>
        </Card>
    );
};

export default ContestsListTile;
