import React from 'react';
import { Badge, Card } from 'antd';
import { get as _get } from 'lodash';
import classnames from 'classnames';
import { LeaguesListTileProps } from './types';
import LeaguesListTileLeaderboard from './LeaguesListTileLeaderboard';
import constants from '@constants';
import routes from '@constants/routes';
import { mapStatusColour, withAppRoute, withS3URL } from '@utils';
import { Avatar } from '@components';
import './LeaguesListTile.less';

const LeaguesListTile: React.FunctionComponent<LeaguesListTileProps> = ({
    props: { index, style, data },
    history,
}) => {
    const isEven = index % 2;
    const item = _get(data, [index], undefined);
    const uuid = _get(item, ['uuid'], undefined);

    const handleClick = (options: any) => {
        history.push(
            withAppRoute(routes.ROUTES.HOME.ROUTE, {
                app: constants.APPS.LEAGUE_APP,
                routeProps: { league_uuid: uuid },
            }),
            options
        );
    };

    const name = _get(item, ['name'], 'Loading...');
    const avatar = _get(item, ['avatar', 's3_filename'], undefined);
    const src = avatar && withS3URL(avatar, constants.S3_FOLDERS.LEAGUE.AVATAR);
    const status = _get(item, ['status'], undefined);
    const participants = _get(item, ['participants'], {});
    const cardCx = classnames('leagues-list-tile-card', { filled: !isEven });
    return (
        <div key={index} style={style} className="leagues-list-tile-view">
            <Card
                bordered={false}
                className={cardCx}
                onClick={() => handleClick(item)}
            >
                <div className="leagues-list-tile-content">
                    <div className="leagues-list-tile-content-main">
                        <div className="leagues-list-tile-content-main-avatar">
                            <Avatar
                                src={src}
                                shape="square"
                                name={name}
                                size={48}
                            />
                        </div>
                        <div className="leagues-list-tile-content-main-info">
                            <div className="leagues-list-tile-content-main-name">
                                {name}
                            </div>
                            <div className="leagues-list-tile-content-main-status">
                                <Badge
                                    color={mapStatusColour(status)}
                                    text={status}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="leagues-list-tile-content-side">
                        <div className="leagues-list-tile-content-side-leaderboard">
                            <LeaguesListTileLeaderboard
                                status={status}
                                participants={Object.values(participants)}
                            />
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default LeaguesListTile;
