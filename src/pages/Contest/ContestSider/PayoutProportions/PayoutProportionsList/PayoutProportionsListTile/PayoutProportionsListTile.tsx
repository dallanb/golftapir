import React from 'react';
import classnames from 'classnames';
import { get as _get } from 'lodash';
import { Card } from 'antd';
import { PayoutProportionsListTileProps } from './types';
import { ordinalSuffix } from '@utils';
import './PayoutProportionsListTile.less';
import constants from '@constants';
import CONSTANTS from '@locale/en-CA';

const PayoutProportionListTile: React.FunctionComponent<PayoutProportionsListTileProps> = ({
    props: { index, style, data },
    status,
}) => {
    const isEven = index % 2;
    const item = _get(data, [index], undefined);

    const rank = _get(item, ['rank'], null);
    const proportion = _get(item, ['proportion'], null);
    const payout = _get(item, ['payout'], null);

    const cardCx = classnames('payout-proportions-tile-card', {
        filled: isEven,
    });

    return (
        <div key={index} style={style} className="payout-proportions-tile-view">
            <Card bordered={false} className={cardCx}>
                <div className="payout-proportions-tile-content">
                    <div className="payout-proportions-tile-content-main">
                        <div className="payout-proportions-tile-content-main-info">
                            <div className="payout-proportions-tile-content-main-rank">
                                {`${ordinalSuffix(
                                    rank
                                )} ${CONSTANTS.COMMON.PLACE.toLowerCase()}`}
                            </div>
                        </div>
                    </div>
                    <div className="payout-proportions-tile-content-side">
                        {status === constants.STATUS.PENDING.KEY
                            ? `${proportion * 100}%`
                            : `$${payout}`}
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default PayoutProportionListTile;
