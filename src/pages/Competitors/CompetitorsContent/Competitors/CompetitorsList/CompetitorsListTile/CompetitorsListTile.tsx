import React from 'react';
import { Badge, Card } from 'antd';
import { get as _get } from 'lodash';
import classnames from 'classnames';
import { CompetitorsListTileProps } from './types';
import constants from '@constants';
import routes from '@constants/routes';
import { getName, mapStatusColour, withAppRoute, withS3URL } from '@utils';
import CompetitorsListTileCountry from './CompetitorsListTileCountry';
import CompetitorsListTileUsername from './CompetitorsListTileUsername';
import { Avatar } from '@components';
import './CompetitorsListTile.less';

const CompetitorsListTile: React.FunctionComponent<CompetitorsListTileProps> = ({
    props: { index, style, data },
    history,
}) => {
    const isEven = index % 2;
    const item = _get(data, [index], undefined);
    const uuid = _get(item, ['uuid'], null);
    const handleClick = (options: any) => {
        history.push(
            withAppRoute(routes.ROUTES.COMPETITOR.ROUTE, {
                app: constants.APPS.MEMBER_APP,
                routeProps: { competitor_uuid: uuid },
            }),

            options
        );
    };

    const name = getName(item, 'Loading...');
    const username = _get(item, ['username'], undefined);
    const avatar = _get(item, ['avatar', 's3_filename'], undefined);
    const src = avatar && withS3URL(avatar, constants.S3_FOLDERS.MEMBER.AVATAR);
    const status = _get(item, ['status'], undefined);
    const country = _get(item, ['country'], undefined);
    const cardCx = classnames('competitors-list-tile-card', {
        filled: !isEven,
    });

    return (
        <div style={style} className="competitors-list-tile-view" key={index}>
            <Card
                bordered={false}
                onClick={() => handleClick(item)}
                className={cardCx}
            >
                <div className="competitors-list-tile-content">
                    <div className="competitors-list-tile-content-main">
                        <div className="competitors-list-tile-content-main-avatar">
                            <Avatar
                                src={src}
                                name={name}
                                size={48}
                                shape={'square'}
                            />
                        </div>
                        <div className="competitors-list-tile-content-main-info">
                            <div className="competitors-list-tile-content-main-name">
                                {name}
                            </div>
                            <div className="competitors-list-tile-content-main-status">
                                <Badge
                                    color={mapStatusColour(status)}
                                    text={status}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="competitors-list-tile-content-side">
                        <div className="competitors-list-tile-content-side-country">
                            <CompetitorsListTileCountry country={country} />
                        </div>
                        <div className="competitors-list-tile-content-side-username">
                            <CompetitorsListTileUsername username={username} />
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default CompetitorsListTile;
