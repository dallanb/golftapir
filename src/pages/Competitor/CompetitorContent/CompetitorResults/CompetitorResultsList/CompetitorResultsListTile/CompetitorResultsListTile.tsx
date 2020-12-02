import React from 'react';
import { Badge, Button, Card } from 'antd';
import { get as _get, pick as _pick } from 'lodash';
import { CompetitorResultsListTileProps } from './types';
import constants from '@constants';
import { mapStatusColour, withS3URL } from '@utils';
import { Avatar } from '@components';
import './CompetitorResultsListTile.scss';

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
        <Card
            style={style}
            key={index}
            className="competitor-results-list-tile-view"
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
                        <Badge color={mapStatusColour(status)} text={status} />
                    </div>
                </div>
            </div>
            <div className="competitor-results-list-tile-button">
                <Button onClick={() => handleClick(item)}>View</Button>
            </div>
        </Card>
    );
};

export default CompetitorResultsListTile;
