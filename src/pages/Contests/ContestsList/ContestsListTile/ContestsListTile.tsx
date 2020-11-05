import React from 'react';
import { Badge, Button, Card } from 'antd';
import { get as _get, pick as _pick } from 'lodash';
import { ContestsListTileProps } from './types';
import ContestsListTileLeaderboard from './ContestsListTileLeaderboard';
import constants from '@constants';
import { mapStatusColour, withS3URL } from '@utils';
import { Avatar } from '@components';
import './ContestsListTile.scss';

const ContestsListTile: React.FunctionComponent<ContestsListTileProps> = ({
    props: { index, style, data },
    history,
}) => {
    const item = _get(data, [index], undefined);
    const handleClick = (options: {
        uuid: string;
        name: string;
        status: string;
        src: string;
    }) => {
        history.push(`/app${constants.ROUTES.CONTEST}`, options);
    };

    const uuid = _get(item, ['uuid'], undefined);
    const name = _get(item, ['name'], 'Loading...');
    const avatar = _get(item, ['avatar'], undefined);
    const src =
        avatar && withS3URL(avatar, constants.S3_FOLDERS.CONTEST.AVATAR);
    const status = _get(item, ['status'], undefined);
    const participants = _get(item, ['participants'], {});

    return (
        <Card style={style} key={index} className="contest-list-tile-view">
            <div className="contest-list-tile-content">
                <div className="contest-list-tile-content-avatar">
                    <Avatar src={src} name={name} size={48} />
                </div>
                <div className="contest-list-tile-content-info">
                    <div className="contest-list-tile-content-name">{name}</div>
                    <div className="contest-list-tile-content-status">
                        <Badge color={mapStatusColour(status)} text={status} />
                    </div>
                </div>
                <div className="contest-list-tile-content-leaderboard">
                    <ContestsListTileLeaderboard
                        status={status}
                        participants={Object.values(participants)}
                    />
                </div>
            </div>
            <div className="contest-list-tile-button">
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

export default ContestsListTile;
