import React from 'react';
import { Badge, Button, Card } from 'antd';
import { get as _get } from 'lodash';
import { CompetitorsListTileProps } from './types';
import constants from '@constants';
import { mapStatusColour, withS3URL } from '@utils';
import { Avatar } from '@components';
import './CompetitorsListTile.scss';

const CompetitorsListTile: React.FunctionComponent<CompetitorsListTileProps> = ({
    props: { index, style, data },
    history,
}) => {
    const item = _get(data, [index], undefined);
    const handleClick = (options: any) => {
        history.push(`/app${constants.ROUTES.COMPETITOR}`, options);
    };

    const uuid = _get(item, ['uuid'], undefined);
    const name = _get(item, ['name'], 'Loading...');
    const avatar = _get(item, ['avatar'], undefined);
    const src =
        avatar && withS3URL(avatar, constants.S3_FOLDERS.ACCOUNT.AVATAR);
    const status = _get(item, ['status'], undefined);

    return (
        <Card style={style} key={index} className="competitors-list-tile-view">
            <div className="competitors-list-tile-content">
                <div className="competitors-list-tile-content-avatar">
                    <Avatar src={src} name={name} size={48} />
                </div>
                <div className="competitors-list-tile-content-info">
                    <div className="competitors-list-tile-content-name">
                        {name}
                    </div>
                    <div className="competitors-list-tile-content-status">
                        <Badge color={mapStatusColour(status)} text={status} />
                    </div>
                </div>
            </div>
            <div className="competitors-list-tile-button">
                <Button
                    onClick={() => handleClick({ uuid, name, status, src })}
                    disabled={!uuid}
                >
                    View
                </Button>
            </div>
        </Card>
    );
};

export default CompetitorsListTile;
