import React from 'react';
import { NavExtraProps } from './types';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectLeagues, selectPending } from '@selectors/BaseSelector';
import { selectLeagueUUID } from '@selectors/AppSelector';
import './NavExtra.less';
import { Button, Dropdown, Menu } from 'antd';
import { navigate, withAppRoute, withS3URL } from '@utils';
import routes from '@constants/routes';
import constants from '@constants';
import { Avatar, PendingBadge } from '@components';
import {
    CheckOutlined,
    NotificationFilled,
    TrophyFilled,
} from '@ant-design/icons';
import UserMenu from '@components/UserTile/UserMenu';
import { get as _get } from 'lodash';
import LeaguesMenu from '@apps/components/NavExtra/LeaguesMenu';

const NavExtra: React.FunctionComponent<NavExtraProps> = () => {
    const history = useHistory();
    const pending = useSelector(selectPending);
    const uuid = useSelector(selectLeagueUUID);
    const leagues = useSelector(selectLeagues) || [];

    const getLeaguesMenuItems: any = () =>
        leagues.map(({ league, member }: any) => (
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
                <div className="nav-extra-league">
                    <div className="nav-extra-league-avatar">
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
                    <div className="nav-extra-league-name">{league.name}</div>
                    <div className="nav-extra-league-selected">
                        {league.uuid === uuid && <CheckOutlined />}
                    </div>
                </div>
            </Menu.Item>
        ));

    return (
        <div className="nav-extra">
            <div className="nav-extra-notification">
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
            <div className="nav-extra-leagues-drop-down">
                <Dropdown
                    overlay={<LeaguesMenu items={getLeaguesMenuItems()} />}
                    // overlay={<UserMenu items={getLeaguesMenuItems()} />}
                    trigger={['click']}
                    overlayClassName="leagues-drop-down-overlay"
                >
                    <Button
                        type="text"
                        icon={<TrophyFilled />}
                        className="leagues-button"
                    />
                </Dropdown>
            </div>
        </div>
    );
};

export default NavExtra;
