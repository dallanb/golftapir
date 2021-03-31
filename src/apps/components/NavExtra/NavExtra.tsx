import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { get as _get } from 'lodash';
import { Button, Divider, Dropdown, Menu } from 'antd';
import {
    CaretDownFilled,
    CheckOutlined,
    NotificationFilled,
} from '@ant-design/icons';
import {
    selectLeagues,
    selectMe,
    selectMyAvatarSrc,
    selectPending,
} from '@selectors/BaseSelector';
import { NavExtraProps } from './types';
import {
    selectLeagueMemberStatus,
    selectLeagueUUID,
} from '@selectors/AppSelector';
import { navigate, statusToRole, withAppRoute, withS3URL } from '@utils';
import routes from '@constants/routes';
import constants from '@constants';
import { Avatar, PendingBadge } from '@components';
import ExtraWallet from './ExtraWallet';
import ExtraMember from './ExtraMember';
import OverlayMenu from '@apps/components/OverlayMenu';
import CONSTANTS from '@locale/en-CA';
import './NavExtra.less';

const NavExtra: React.FunctionComponent<NavExtraProps> = () => {
    const history = useHistory();
    const pending = useSelector(selectPending);
    const uuid = useSelector(selectLeagueUUID);
    const leagues = useSelector(selectLeagues) || [];
    const { data: user } = useSelector(selectMe);
    const username = _get(user, ['username'], '');

    const getExtraMenuItems: any = () => {
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
                            border
                        />
                    </div>
                    <div className="nav-extra-league-name">{league.name}</div>
                    <div className="nav-extra-league-selected">
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
                {CONSTANTS.COMMON.LOG_OUT}{' '}
                <span className="nav-extra-username">{username}</span>
            </Menu.Item>,
        ];
        return [...leagueMenuItems, ...authMenuItems];
    };

    return (
        <div className="nav-extra">
            <ExtraWallet />
            <ExtraMember />
            <div className="nav-extra-buttons">
                <div className="nav-extra-notification">
                    <Button
                        onClick={() =>
                            navigate(
                                history,
                                withAppRoute(
                                    routes.ROUTES.NOTIFICATIONS.ROUTE,
                                    {
                                        app: constants.APPS.MEMBER_APP,
                                    }
                                )
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
                <div className="nav-extra-drop-down">
                    <Dropdown
                        overlay={
                            <OverlayMenu
                                items={getExtraMenuItems()}
                                className="extra-menu"
                            />
                        }
                        // overlay={<UserMenu items={getLeaguesMenuItems()} />}
                        trigger={['click']}
                        overlayClassName="extra-drop-down-overlay"
                    >
                        <Button
                            type="text"
                            icon={<CaretDownFilled />}
                            className="extra-button"
                        />
                    </Dropdown>
                </div>
            </div>
        </div>
    );
};

export default NavExtra;
