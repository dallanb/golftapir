import React from 'react';
import { Button, Card } from 'antd';
import _ from 'lodash';
import { ContestListTileProps } from './types';

import './ContestListTile.scss';
let ContestListTile: ContestListTileProps;
ContestListTile = ({ index, style }, items, history) => {
    const item = _.get(items, [index], undefined);
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

export default ContestListTile;
