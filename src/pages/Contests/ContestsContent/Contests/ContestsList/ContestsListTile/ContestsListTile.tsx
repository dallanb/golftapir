import React from 'react';
import { Badge, Card } from 'antd';
import { get as _get } from 'lodash';
import classnames from 'classnames';
import { ContestsListTileProps } from './types';
import ContestsListTileLeaderboard from './ContestsListTileLeaderboard';
import ContestsListTileCourse from './ContestsListTileCourse';
import ContestsListTileDate from './ContestsListTileDate';
import constants from '@constants';
import { mapStatusColour, withS3URL } from '@utils';
import { Avatar } from '@components';
import './ContestsListTile.less';

const ContestsListTile: React.FunctionComponent<ContestsListTileProps> = ({
    props: { index, style, data },
    history,
}) => {
    const isEven = index % 2;
    const item = _get(data, [index], undefined);
    const handleClick = (options: any) => {
        history.push(`/app${constants.ROUTES.CONTEST.ROUTE}`, options);
    };

    const uuid = _get(item, ['uuid'], undefined);
    const name = _get(item, ['name'], 'Loading...');
    const avatar = _get(item, ['avatar'], undefined);
    const src =
        avatar && withS3URL(avatar, constants.S3_FOLDERS.CONTEST.AVATAR);
    const status = _get(item, ['status'], undefined);
    const course = _get(item, ['location'], {});
    const time = _get(item, ['start_time'], undefined);
    const participants = _get(item, ['participants'], {});
    const cardCx = classnames('contest-list-tile-card', { filled: !isEven });
    return (
        <div key={index} style={style} className="contest-list-tile-view">
            <Card
                bordered={false}
                className={cardCx}
                onClick={() => handleClick(item)}
            >
                <div className="contest-list-tile-content">
                    <div className="contest-list-tile-content-main">
                        <div className="contest-list-tile-content-main-avatar">
                            <Avatar src={src} name={name} size={48} />
                        </div>
                        <div className="contest-list-tile-content-main-info">
                            <div className="contest-list-tile-content-main-name">
                                {name}
                            </div>
                            <div className="contest-list-tile-content-main-status">
                                <Badge
                                    color={mapStatusColour(status)}
                                    text={status}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="contest-list-tile-content-side">
                        <div className="contest-list-tile-content-side-course">
                            <ContestsListTileCourse course={course} />
                        </div>
                        {status === constants.STATUS.PENDING.KEY ||
                        status === constants.STATUS.READY.KEY ? (
                            <div className="contest-list-tile-content-side-leaderboard">
                                <ContestsListTileDate
                                    status={status}
                                    date={time}
                                />
                            </div>
                        ) : (
                            <div className="contest-list-tile-content-side-leaderboard">
                                <ContestsListTileLeaderboard
                                    status={status}
                                    participants={Object.values(participants)}
                                />
                            </div>
                        )}
                    </div>
                </div>
                {/*<div className="contest-list-tile-button">*/}
                {/*    <Button onClick={() => handleClick(item)} disabled={!uuid}>*/}
                {/*        View*/}
                {/*    </Button>*/}
                {/*</div>*/}
            </Card>
        </div>
    );
};

export default ContestsListTile;
