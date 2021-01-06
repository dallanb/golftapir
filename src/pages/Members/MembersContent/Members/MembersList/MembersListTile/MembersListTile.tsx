import React from 'react';
import { useParams } from 'react-router-dom';
import { Badge, Card } from 'antd';
import { get as _get } from 'lodash';
import classnames from 'classnames';
import { MembersListTileProps } from './types';
import constants from '@constants';
import routes from '@constants/routes';
import { getName, mapStatusColour, withAppRoute, withS3URL } from '@utils';
import { Avatar } from '@components';
import MembersListTileCreatedAt from './MembersListTileCreatedAt';
import './MembersListTile.less';

const MembersListTile: React.FunctionComponent<MembersListTileProps> = ({
    props: { index, style, data },
    history,
    params,
}) => {
    const isEven = index % 2;
    const item = _get(data, [index], undefined);
    const member_uuid = _get(item, ['uuid'], null);
    const handleClick = (options: any) => {
        history.push(
            withAppRoute(routes.ROUTES.MEMBER.ROUTE, {
                routeProps: {
                    ...params,
                    member_uuid,
                },
            }),
            options
        );
    };

    const name = getName(item, 'Loading...');
    const avatar = _get(item, ['avatar', 's3_filename'], undefined);
    const src = avatar && withS3URL(avatar, constants.S3_FOLDERS.MEMBER.AVATAR);
    const status = _get(item, ['status'], undefined);
    const ctime = _get(item, ['ctime'], undefined);
    const cardCx = classnames('members-list-tile-card', {
        filled: !isEven,
    });

    return (
        <div style={style} className="members-list-tile-view" key={index}>
            <Card
                bordered={false}
                onClick={() => handleClick(item)}
                className={cardCx}
            >
                <div className="members-list-tile-content">
                    <div className="members-list-tile-content-main">
                        <div className="members-list-tile-content-main-avatar">
                            <Avatar
                                src={src}
                                name={name}
                                size={48}
                                shape={'square'}
                            />
                        </div>
                        <div className="members-list-tile-content-main-info">
                            <div className="members-list-tile-content-main-name">
                                {name}
                            </div>
                            <div className="members-list-tile-content-main-status">
                                <Badge
                                    color={mapStatusColour(status)}
                                    text={status}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="members-list-tile-content-side">
                        <div className="members-list-tile-content-side-created-at">
                            <MembersListTileCreatedAt ctime={ctime} />
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default MembersListTile;
