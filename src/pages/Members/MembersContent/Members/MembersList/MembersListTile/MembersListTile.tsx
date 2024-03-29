import React from 'react';
import { Badge, Card } from 'antd';
import { get as _get } from 'lodash';
import classnames from 'classnames';
import { MembersListTileProps } from './types';
import constants from '@constants';
import routes from '@constants/routes';
import {
    getName,
    mapStatusColour,
    navigate,
    withAppRoute,
    withS3URL,
} from '@utils';
import { Avatar } from '@components';
import MembersListTileActivatedOn from './MembersListTileActivatedOn';
import MembersListTileCountry from './MembersListTileCountry';
import './MembersListTile.less';
import { UserOutlined } from '@ant-design/icons';

const MembersListTile: React.FunctionComponent<MembersListTileProps> = ({
    props: { index, style, data },
    history,
    params,
    data: { member, readOnly },
}) => {
    const isEven = index % 2;
    const item = _get(data, [index], undefined);
    const member_uuid = _get(item, ['uuid'], null);
    const myMember = member_uuid === member;

    const handleClick = (options: any) => {
        if (!readOnly) {
            navigate(
                history,
                withAppRoute(routes.ROUTES.MEMBER.ROUTE, {
                    routeProps: {
                        ...params,
                        member_uuid,
                    },
                }),
                options
            );
        }
    };

    const name = getName(item, 'Loading...');
    const avatar = _get(item, ['avatar'], undefined);
    const src = avatar && withS3URL(avatar, constants.S3_FOLDERS.MEMBER.AVATAR);
    const country = _get(item, ['country'], undefined);
    const status = _get(item, ['status'], undefined);
    const activationTime = _get(item, ['activation_time'], undefined);
    const cardCx = classnames(
        'members-list-tile-card',
        {
            filled: isEven,
        },
        { disabled: readOnly }
    );

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
                                border
                            />
                        </div>
                        <div className="members-list-tile-content-main-info">
                            <div className="members-list-tile-content-main-name">
                                {name}
                                {myMember && (
                                    <UserOutlined className="members-list-tile-content-main-name-user" />
                                )}
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
                        <div className="members-list-tile-content-side-country">
                            <MembersListTileCountry country={country} />
                        </div>
                        <div className="members-list-tile-content-side-activated-on">
                            <MembersListTileActivatedOn
                                activatedOn={activationTime}
                            />
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default MembersListTile;
