import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Divider, Skeleton } from 'antd';
import classnames from 'classnames';
import { get as _get, takeRight as _takeRight } from 'lodash';
import { DollarTwoTone } from '@ant-design/icons/lib';
import { selectMe, selectMyWalletBalance } from '@selectors/BaseSelector';
import { ExtraWalletProps } from './types';
import routes from '@constants/routes';
import { selectLeagueMemberStatus } from '@selectors/AppSelector';
import { ModalActions } from '@actions';
import {
    bodyRenderer,
    footerRenderer,
    headerRenderer,
} from '@apps/components/Wallet/WalletModal';
import constants from '@constants';
import { roundToMoney, statusToRole } from '@utils';
import CONSTANTS from '@locale/en-CA';
import './ExtraWallet.less';

const ExtraWallet: React.FunctionComponent<ExtraWalletProps> = ({}) => {
    const dispatch = useDispatch();
    const params = useParams();
    const { isInitialized, isRefreshing } = useSelector(selectMe);
    const isLeagueApp = _get(params, ['league_uuid'], undefined);
    const isWalletCreatePage =
        _takeRight(location.pathname.split('/'), 2).join('') ==
        _takeRight(routes.ROUTES.COURSES_CREATE.ROUTE.split('/'), 2).join('');
    const balance = useSelector(selectMyWalletBalance);
    const memberStatus = useSelector(selectLeagueMemberStatus);
    const role = statusToRole(memberStatus);
    const disabled = role < constants.ROLE.ACTIVE || isWalletCreatePage;
    const cx = classnames('nav-extra-wallet', {
        disabled,
    });
    if (!isLeagueApp) {
        return null;
    }
    return (
        <>
            <div
                onClick={() =>
                    !disabled &&
                    dispatch(
                        ModalActions.openModal(
                            headerRenderer,
                            bodyRenderer,
                            footerRenderer,
                            undefined
                        )
                    )
                }
                className={cx}
            >
                <div className="nav-extra-wallet-balance">
                    <div className="nav-extra-wallet-balance-label">
                        {CONSTANTS.COMMON.BALANCE}
                    </div>
                    <div className="nav-extra-wallet-balance-amount">
                        <DollarTwoTone
                            twoToneColor={'orange'}
                            className="nav-extra-wallet-balance-amount-icon"
                        />
                        {isInitialized && !isRefreshing ? (
                            roundToMoney(balance)
                        ) : (
                            <Skeleton.Input
                                style={{ width: 30, height: 15 }}
                                active
                            />
                        )}
                    </div>
                </div>
            </div>
            <Divider type="vertical" />
        </>
    );
};

export default ExtraWallet;
