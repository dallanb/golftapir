import React from 'react';
import { Button, Card } from 'antd';
import { get as _get, pick as _pick } from 'lodash';
import { ContestsListTileProps } from './types';
import './ContestsListTile.scss';
import constants from '@constants';

const ContestsListTile: React.FunctionComponent<ContestsListTileProps> = ({
    props: { index, style, data },
    history,
}) => {
    const item = _get(data, [index], undefined);
    const handleClick = (options: { uuid: string; name: string }) => {
        history.push(`/app${constants.ROUTES.CONTEST}`, options);
    };

    return (
        <Card style={style} key={index} className="contest-list-tile-view">
            <div className="contest-list-tile-content">
                {item ? item.name : 'Loading...'}
            </div>
            <div className="contest-list-tile-button">
                <Button
                    onClick={() => handleClick(_pick(item, ['uuid', 'name']))}
                >
                    View
                </Button>
            </div>
        </Card>
    );
};

export default ContestsListTile;
