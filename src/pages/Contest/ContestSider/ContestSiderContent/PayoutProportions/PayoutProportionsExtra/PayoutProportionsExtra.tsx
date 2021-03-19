import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReloadOutlined } from '@ant-design/icons';
import { PayoutProportionsExtraProps } from './types';
import classnames from 'classnames';
import {
    selectContestUUID,
    selectPayoutIsFetching,
} from '@pages/Contest/selector';
import ContestPageActions from '@pages/Contest/actions';
import './PayoutProportionsExtra.less';

const PayoutProportionsExtra: React.FunctionComponent<PayoutProportionsExtraProps> = () => {
    const dispatch = useDispatch();
    const uuid = useSelector(selectContestUUID);
    const isFetching = useSelector(selectPayoutIsFetching);

    const refreshButtonRenderer = () => {
        const disabled = isFetching;
        const cx = classnames('refresh-button', { disabled });
        return (
            <ReloadOutlined
                className={cx}
                onClick={() =>
                    !disabled && dispatch(ContestPageActions.fetchPayout(uuid))
                }
            />
        );
    };

    return (
        <div className="payout-proportions-extra">
            <div className="payout-proportions-extra-refresh">
                {refreshButtonRenderer()}
            </div>
        </div>
    );
};

export default PayoutProportionsExtra;
