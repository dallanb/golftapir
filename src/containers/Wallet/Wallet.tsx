import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { get as _get, takeRight as _takeRight } from 'lodash';
import { Button, Skeleton } from 'antd';
import { DollarTwoTone, PlusOutlined } from '@ant-design/icons';
import { WalletProps } from './types';
import ComponentContent from '@layouts/ComponentContent';
import { selectMe, selectMyWalletBalance } from '@selectors/BaseSelector';
import { selectLeagueMemberStatus } from '@selectors/AppSelector';
import { roundToMoney, statusToRole } from '@utils';
import constants from '@constants';
import { ModalActions } from '@actions';
import { bodyRenderer, footerRenderer, headerRenderer } from './WalletModal';
import './Wallet.less';
import routes from '@constants/routes';
import CONSTANTS from '@locale/en-CA';

const Wallet: React.FunctionComponent<WalletProps> = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const isWalletCreatePage =
        _takeRight(location.pathname.split('/'), 2).join('') ==
        _takeRight(routes.ROUTES.COURSES_CREATE.ROUTE.split('/'), 2).join('');
    const { isInitialized, isRefreshing } = useSelector(selectMe);
    const balance = useSelector(selectMyWalletBalance);
    const memberStatus = useSelector(selectLeagueMemberStatus);
    const role = statusToRole(memberStatus);
    return (
        <ComponentContent
            className="wallet-component-content space"
            showSpinner={!isInitialized}
        >
            <div className="wallet-main">
                <div className="wallet-balance">
                    <div className="wallet-balance-label">
                        {CONSTANTS.COMMON.BALANCE}
                    </div>
                    <div className="wallet-balance-amount">
                        <DollarTwoTone
                            twoToneColor={'orange'}
                            className="wallet-balance-amount-icon"
                        />
                        {isInitialized && !isRefreshing ? (
                            roundToMoney(balance)
                        ) : (
                            <Skeleton.Input style={{ width: 20 }} active />
                        )}
                    </div>
                </div>
            </div>
            <div className="wallet-side">
                <div className="wallet-button">
                    <Button
                        onClick={() =>
                            dispatch(
                                ModalActions.openModal(
                                    headerRenderer,
                                    bodyRenderer,
                                    footerRenderer,
                                    undefined
                                )
                            )
                        }
                        type="primary"
                        shape="round"
                        disabled={
                            role < constants.ROLE.ACTIVE || isWalletCreatePage
                        }
                        icon={<PlusOutlined />}
                    >
                        {CONSTANTS.COMPONENTS.WALLET.ADD_MODAL.ADD}
                    </Button>
                </div>
            </div>
        </ComponentContent>
    );
};

export default Wallet;
