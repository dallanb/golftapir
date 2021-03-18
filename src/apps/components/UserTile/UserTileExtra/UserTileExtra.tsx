import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button, Menu } from 'antd';
import { get as _get } from 'lodash';
import { CheckOutlined, NotificationFilled } from '@ant-design/icons';
import { UserTileExtraProps } from './types';
import routes from '@constants/routes';
import { Avatar, PendingBadge, UserTile } from '@components';
import { selectPending, selectLeagues } from '@selectors/BaseSelector';
import { selectLeagueUUID } from '@selectors/AppSelector';
import { navigate, withAppRoute, withS3URL } from '@utils';
import constants from '@constants';
import './UserTileExtra.less';

const UserTileExtra: React.FunctionComponent<UserTileExtraProps> = ({
    user,
}) => {
    const history = useHistory();
    const pending = useSelector(selectPending);
    const uuid = useSelector(selectLeagueUUID);
    const leagues = useSelector(selectLeagues) || [];

    const getUserTileMenuItems: any = () => {
        const leagueMenuItems = leagues.map(({ league, member }: any) => (
            <Menu.Item
                key={league.uuid}
                onClick={() =>
                    navigate(
                        history,
                        withAppRoute(routes.ROUTES.LEAGUE_HOME.ROUTE, {
                            app: constants.APPS.LEAGUE_APP,
                            routeProps: { league_uuid: league.uuid },
                        }),
                        { league, member }
                    )
                }
            >
                <div className="user-tile-extra-league">
                    <div className="user-tile-extra-league-avatar">
                        <Avatar
                            src={withS3URL(
                                _get(league, ['avatar', 's3_filename'], null),
                                constants.S3_FOLDERS.LEAGUE.AVATAR
                            )}
                            name={league.name}
                            shape="square"
                            size={24}
                        />
                    </div>
                    <div className="user-tile-extra-league-name">
                        {league.name}
                    </div>
                    <div className="user-tile-extra-league-selected">
                        {league.uuid === uuid && <CheckOutlined />}
                    </div>
                </div>
            </Menu.Item>
        ));
        const authMenuItems = [
            <Menu.Item
                key="logout"
                onClick={() =>
                    navigate(
                        history,
                        withAppRoute(routes.ROUTES.LOGOUT.ROUTE, {
                            app: constants.APPS.AUTH_APP,
                        })
                    )
                }
            >
                Log out{' '}
                <span className="user-tile-extra-username">
                    {user.username}
                </span>
            </Menu.Item>,
        ];
        return [...leagueMenuItems, ...authMenuItems];
    };

    return (
        <div className="user-tile-extra">
            <div className="user-tile-extra-notification">
                <Button
                    onClick={() =>
                        navigate(
                            history,
                            withAppRoute(routes.ROUTES.NOTIFICATIONS.ROUTE, {
                                app: constants.APPS.MEMBER_APP,
                            })
                        )
                    }
                    type="text"
                    icon={
                        <PendingBadge
                            value={{ pending }}
                            icon={NotificationFilled}
                        />
                    }
                    className="notification-button"
                />
            </div>
            <div className="user-tile-extra-drop-down">
                <UserTile
                    menu={getUserTileMenuItems}
                    overlayClassName="user-tile-extra-overlay"
                />
            </div>
        </div>
    );
};

export default UserTileExtra;
