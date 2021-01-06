import React from 'react';
import { Badge, Card } from 'antd';
import { get as _get } from 'lodash';
import classnames from 'classnames';
import { MemberResultsListTileProps } from './types';
import constants from '@constants';
import routes from '@constants/routes';
import { mapStatusColour, withAppRoute, withS3URL } from '@utils';
import { Avatar } from '@components';
import './MemberResultsListTile.less';

const MemberResultsListTile: React.FunctionComponent<MemberResultsListTileProps> = ({
    props: { index, style, data },
    history,
    params
}) => {
    const isEven = index % 2;

    const item = _get(data, [index], undefined);
    const handleClick = (options: any) => {
        history.push(
            withAppRoute(routes.ROUTES.CONTEST.ROUTE, {
                routeProps: params,
            }),
            options
        );
    };

    const name = _get(item, ['name'], 'Loading...');
    const avatar = _get(item, ['avatar'], undefined);
    const src =
        avatar && withS3URL(avatar, constants.S3_FOLDERS.CONTEST.AVATAR);
    const status = _get(item, ['status'], undefined);
    const cardCx = classnames('member-results-list-tile-card', {
        filled: !isEven,
    });

    return (
        <div
            key={index}
            style={style}
            className="member-results-list-tile-view"
        >
            <Card
                bordered={false}
                className={cardCx}
                onClick={() => handleClick(item)}
            >
                <div className="member-results-list-tile-content">
                    <div className="member-results-list-tile-content-avatar">
                        <Avatar
                            src={src}
                            name={name}
                            size={48}
                            shape={'square'}
                        />
                    </div>
                    <div className="member-results-list-tile-content-info">
                        <div className="member-results-list-tile-content-name">
                            {name}
                        </div>
                        <div className="member-results-list-tile-content-status">
                            <Badge
                                color={mapStatusColour(status)}
                                text={status}
                            />
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default MemberResultsListTile;
