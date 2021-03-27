import React from 'react';
import { Badge, Card, Tag } from 'antd';
import { get as _get } from 'lodash';
import classnames from 'classnames';
import { InvitesListTileProps } from './types';
import constants from '@constants';
import { mapStatusColour } from '@utils';
import './InvitesListTile.less';

const InvitesListTile: React.FunctionComponent<InvitesListTileProps> = ({
    props: { index, style, data },
}) => {
    const isEven = index % 2;
    const item = _get(data, [index], undefined);

    const email = _get(item, ['email'], 'Loading...');
    const username = _get(item, ['username']);
    const displayName = _get(item, ['display_name']);
    const status = _get(item, ['status'], constants.STATUS.INVITED.KEY);
    const cardCx = classnames('invites-list-tile-card', { filled: isEven });
    return (
        <div key={index} style={style} className="invites-list-tile-view">
            <Card bordered={false} className={cardCx}>
                <div className="invites-list-tile-content">
                    <div className="invites-list-tile-content-main">
                        <div className="invites-list-tile-content-main-info">
                            <div className="invites-list-tile-content-main-name">
                                {username ? (
                                    <>
                                        <div className="invites-list-tile-content-main-display-name">
                                            {displayName}
                                        </div>
                                        <div className="invites-list-tile-content-main-username">
                                            {username}
                                        </div>
                                    </>
                                ) : (
                                    email
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="invites-list-tile-content-side">
                        <Tag color={mapStatusColour(status)}>{status}</Tag>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default InvitesListTile;
