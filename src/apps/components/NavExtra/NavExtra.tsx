import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { get as _get, takeRight as _takeRight } from 'lodash';
import { Button, Dropdown, Menu } from 'antd';
import {
    CheckOutlined,
    NotificationFilled,
    TrophyFilled,
} from '@ant-design/icons';
import { DollarTwoTone } from '@ant-design/icons/lib';
import {
    selectLeagues,
    selectMe,
    selectMyAvatarSrc,
    selectMyWalletBalance,
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
import LeaguesMenu from './LeaguesMenu';
import './NavExtra.less';

const NavExtra: React.FunctionComponent<NavExtraProps> = () => {
    const history = useHistory();
    const pending = useSelector(selectPending);
    const uuid = useSelector(selectLeagueUUID);
    const leagues = useSelector(selectLeagues) || [];
    const { data: user, isInitialized } = useSelector(selectMe);
    const displayName = _get(user, ['display_name'], '');
    const username = _get(user, ['username'], '');
    const src = useSelector(selectMyAvatarSrc);
    const balance = useSelector(selectMyWalletBalance);
    const memberStatus = useSelector(selectLeagueMemberStatus);
    const role = statusToRole(memberStatus);

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
            <div className="nav-extra-user">
                <div className="nav-extra-user-avatar-wrapper">
                    <Avatar
                        name={displayName}
                        src={src}
                        shape={'square'}
                        size={36}
                        className="nav-extra-user-avatar"
                    />
                </div>
                <div className="nav-extra-user-name">
                    <div className="nav-extra-user-name-display-name">
                        {displayName}
                    </div>
                    <div className="nav-extra-user-name-username">
                        {username}
                    </div>
                </div>
            </div>
            <div className="nav-extra-wallet">
                <div className="nav-extra-wallet-balance">
                    <div className="nav-extra-wallet-balance-label">
                        Your Balance
                    </div>
                    <div className="nav-extra-wallet-balance-amount">
                        <DollarTwoTone
                            twoToneColor={'orange'}
                            className="nav-extra-wallet-balance-amount-icon"
                        />
                        {balance}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavExtra;
