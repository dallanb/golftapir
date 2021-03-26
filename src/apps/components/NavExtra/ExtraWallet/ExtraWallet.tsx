import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Divider } from 'antd';
import classnames from 'classnames';
import { get as _get, takeRight as _takeRight } from 'lodash';
import { DollarTwoTone } from '@ant-design/icons/lib';
import { selectMyWalletBalance } from '@selectors/BaseSelector';
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
import { statusToRole } from '@utils';
import './ExtraWallet.less';

const ExtraWallet: React.FunctionComponent<ExtraWalletProps> = ({}) => {
    const dispatch = useDispatch();
    const params = useParams();
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
                        Total Balance
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
            <Divider type="vertical" />
        </>
    );
};

export default ExtraWallet;
