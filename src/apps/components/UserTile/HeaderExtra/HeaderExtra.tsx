import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button, Menu } from 'antd';
import { get as _get } from 'lodash';
import { CheckOutlined, NotificationFilled } from '@ant-design/icons';
import { HeaderExtraProps } from './types';
import routes from '@constants/routes';
import { Avatar, PendingBadge, UserTile } from '@components';
import { selectPending, selectLeagues } from '@selectors/BaseSelector';
import { selectLeagueUUID } from '@selectors/AppSelector';
import { withAppRoute, withS3URL } from '@utils';
import constants from '@constants';
import './HeaderExtra.less';

const HeaderExtra: React.FunctionComponent<HeaderExtraProps> = ({ user }) => {
    const history = useHistory();
    const pending = useSelector(selectPending);
    const uuid = useSelector(selectLeagueUUID);
    const leagues = useSelector(selectLeagues) || [];

    const getUserTileMenuItems: any = () => {
        const leagueMenuItems = leagues.map(({ league, member }: any) => (
            <Menu.Item
                key={league.uuid}
                onClick={() =>
                    history.push(
                        withAppRoute(routes.ROUTES.HOME.ROUTE, {
                            app: constants.APPS.LEAGUE_APP,
                            routeProps: { league_uuid: league.uuid },
                        }),
                        { league, member }
                    )
                }
            >
                <div className="header-extra-league">
                    <div className="header-extra-league-avatar">
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
                    <div className="header-extra-league-name">
                        {league.name}
                    </div>
                    <div className="header-extra-league-selected">
                        {league.uuid === uuid && <CheckOutlined />}
                    </div>
                </div>
            </Menu.Item>
        ));
        const authMenuItems = [
            <Menu.Item
                key="logout"
                onClick={() =>
                    history.push(
                        withAppRoute(routes.ROUTES.LOGOUT.ROUTE, {
                            app: constants.APPS.AUTH_APP,
                        })
                    )
                }
            >
                Log out{' '}
                <span className="header-extra-username">{user.username}</span>
            </Menu.Item>,
        ];
        return [...leagueMenuItems, ...authMenuItems];
    };

    return (
        <div className="header-extra">
            <div className="header-extra-notification">
                <Button
                    onClick={() =>
                        history.push(
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
            <div className="header-extra-drop-down">
                <UserTile
                    menu={getUserTileMenuItems}
                    popoverOverlayClassName="header-extra-popover"
                />
            </div>
        </div>
    );
};

export default HeaderExtra;
