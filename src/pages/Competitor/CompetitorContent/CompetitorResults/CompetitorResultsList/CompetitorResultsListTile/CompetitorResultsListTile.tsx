import React from 'react';
import { Badge, Button, Card } from 'antd';
import { get as _get, pick as _pick } from 'lodash';
import { CompetitorResultsListTileProps } from './types';
import constants from '@constants';
import { mapStatusColour, withS3URL } from '@utils';
import { Avatar } from '@components';
import './CompetitorResultsListTile.less';

const CompetitorResultsListTile: React.FunctionComponent<CompetitorResultsListTileProps> = ({
    props: { index, style, data },
    history,
}) => {
    const item = _get(data, [index], undefined);
    const handleClick = (options: any) => {
        history.push(`/app${constants.ROUTES.CONTEST.ROUTE}`, options);
    };

    const name = _get(item, ['name'], 'Loading...');
    const avatar = _get(item, ['avatar'], undefined);
    const src =
        avatar && withS3URL(avatar, constants.S3_FOLDERS.CONTEST.AVATAR);
    const status = _get(item, ['status'], undefined);

    return (
        <div
            key={index}
            style={style}
            className="competitor-results-list-tile-view"
        >
            <Card
                bordered={false}
                className="competitor-results-list-tile-card"
                onClick={() => handleClick(item)}
            >
                <div className="competitor-results-list-tile-content">
                    <div className="competitor-results-list-tile-content-avatar">
                        <Avatar src={src} name={name} size={48} />
                    </div>
                    <div className="competitor-results-list-tile-content-info">
                        <div className="competitor-results-list-tile-content-name">
                            {name}
                        </div>
                        <div className="competitor-results-list-tile-content-status">
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

export default CompetitorResultsListTile;
