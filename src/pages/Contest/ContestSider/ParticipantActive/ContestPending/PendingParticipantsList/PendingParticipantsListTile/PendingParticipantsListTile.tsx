import React from 'react';
import { useSelector } from 'react-redux';
import { get as _get } from 'lodash';
import { Card, Tag } from 'antd';
import classnames from 'classnames';
// @ts-ignore
import Flags from 'country-flag-icons/react/3x2';
import { selectLeagueMembersDataHashByMember } from '@selectors/AppSelector';
import { PendingParticipantsListTileProps } from './types';
import { prepareParticipant } from '@pages/Contest/utils';
import { selectContest } from '@modules/Contest/selector';
import constants from '@constants';
import './PendingParticipantsListTile.less';

const PendingParticipantsListTile: React.FunctionComponent<PendingParticipantsListTileProps> = ({
    props: { index, style, data },
}) => {
    const isEven = index % 2;
    const item = _get(data, [index], undefined);
    const uuid = _get(item, ['uuid'], undefined);
    const member_uuid = _get(item, ['member_uuid'], undefined);
    const { name, country } = prepareParticipant(
        member_uuid,
        useSelector(selectContest),
        useSelector(selectLeagueMembersDataHashByMember)
    );
    const Country = _get(Flags, [country], null);
    const cardCx = classnames('pending-participants-card', { filled: isEven });
    return (
        //     <div className="pending-participants-list-tile-remind-button">
        //         <RemindButton uuid={uuid} />
        //     </div>
        <div key={index} style={style} className="pending-participants-view">
            <Card bordered={false} className={cardCx}>
                <div className="pending-participants-content">
                    <div className="pending-participants-content-main">
                        <div className="pending-participants-content-main-info">
                            <div className="pending-participants-content-main-country">
                                <Country className="pending-participants-content-main-country-flag" />
                            </div>
                            <div className="pending-participants-content-main-name">
                                {name}
                            </div>
                        </div>
                    </div>
                    <div className="pending-participants-content-side">
                        <Tag color={constants.STATUS.PENDING.COLOUR}>
                            {constants.STATUS.PENDING.KEY}
                        </Tag>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default PendingParticipantsListTile;
