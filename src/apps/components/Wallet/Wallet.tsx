import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { takeRight as _takeRight } from 'lodash';
import { Button } from 'antd';
import { DollarTwoTone, PlusOutlined } from '@ant-design/icons';
import { WalletProps } from './types';
import ComponentContent from '@layouts/ComponentContent';
import {
    selectMeIsInitialized,
    selectMyWalletBalance,
} from '@selectors/BaseSelector';
import { selectLeagueMemberStatus } from '@selectors/AppSelector';
import { statusToRole } from '@utils';
import constants from '@constants';
import { ModalActions } from '@actions';
import { bodyRenderer, footerRenderer, headerRenderer } from './WalletModal';
import './Wallet.less';
import routes from '@constants/routes';

const Wallet: React.FunctionComponent<WalletProps> = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const isWalletCreatePage =
        _takeRight(location.pathname.split('/'), 2).join('') ==
        _takeRight(routes.ROUTES.COURSES_CREATE.ROUTE.split('/'), 2).join('');
    const isInitialized = useSelector(selectMeIsInitialized);
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
                    <div className="wallet-balance-label">Your Balance</div>
                    <div className="wallet-balance-amount">
                        <DollarTwoTone
                            twoToneColor={'orange'}
                            className="wallet-balance-amount-icon"
                        />
                        {balance}
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
                        Add
                    </Button>
                </div>
            </div>
        </ComponentContent>
    );
};

export default Wallet;
