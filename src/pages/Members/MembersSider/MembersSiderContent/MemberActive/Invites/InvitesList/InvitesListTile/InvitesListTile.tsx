import React from 'react';
import { Badge, Card, Tag } from 'antd';
import { get as _get } from 'lodash';
import classnames from 'classnames';
import { InvitesListTileProps } from './types';
import constants from '@constants';
import routes from '@constants/routes';
import { mapStatusColour, withAppRoute } from '@utils';
import './InvitesListTile.less';

const InvitesListTile: React.FunctionComponent<InvitesListTileProps> = ({
    props: { index, style, data },
}) => {
    const isEven = index % 2;
    const item = _get(data, [index], undefined);


    const email = _get(item, ['email'], 'Loading...');
    const cardCx = classnames('invites-list-tile-card', { filled: !isEven });
    return (
        <div key={index} style={style} className="invites-list-tile-view">
            <Card
                bordered={false}
                className={cardCx}
            >
                <div className="invites-list-tile-content">
                    <div className="invites-list-tile-content-main">
                        <div className="invites-list-tile-content-main-info">
                            <div className="invites-list-tile-content-main-name">
                                {email}
                            </div>
                        </div>
                    </div>
                    <div className="invites-list-tile-content-side">
                        <Tag color={constants.STATUS.PENDING.COLOUR}>
                            {constants.STATUS.PENDING.KEY}
                        </Tag>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default InvitesListTile;
