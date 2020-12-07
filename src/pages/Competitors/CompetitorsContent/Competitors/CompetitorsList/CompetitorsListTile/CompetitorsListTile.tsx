import React from 'react';
import { Card } from 'antd';
import { get as _get } from 'lodash';
import { CompetitorsListTileProps } from './types';
import constants from '@constants';
import { getName, withS3URL } from '@utils';
import { Avatar } from '@components';
import './CompetitorsListTile.scss';

const CompetitorsListTile: React.FunctionComponent<CompetitorsListTileProps> = ({
    props: { index, style, data },
    history,
}) => {
    const item = _get(data, [index], undefined);
    const handleClick = (options: any) => {
        history.push(`/app${constants.ROUTES.COMPETITOR.ROUTE}`, options);
    };

    const name = getName(item, 'Loading...');
    const avatar = _get(item, ['avatar', 's3_filename'], undefined);
    const src =
        avatar && withS3URL(avatar, constants.S3_FOLDERS.ACCOUNT.AVATAR);

    return (
        <div style={style} className="competitors-list-tile-view" key={index}>
            <Card
                bordered={false}
                onClick={() => handleClick(item)}
                className="competitors-list-tile-card"
            >
                <div className="competitors-list-tile-content">
                    <div className="competitors-list-tile-content-avatar">
                        <Avatar src={src} name={name} size={48} />
                    </div>
                    <div className="competitors-list-tile-content-info">
                        <div className="competitors-list-tile-content-name">
                            {name}
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default CompetitorsListTile;
