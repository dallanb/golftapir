import React from 'react';
import { Tag } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { CheckCircleTwoTone, StopTwoTone } from '@ant-design/icons/lib';
import { ContestParticipantsTableStatusProps } from './types';
import ContestPageActions from '@pages/Contest/actions';
import { mapStatusColour } from '@utils';
import constants from '@constants';
import './ContestParticipantsTableStatus.scss';
import { selectMe } from '@selectors/BaseSelector';

const ContestParticipantsTableStatus: React.FunctionComponent<ContestParticipantsTableStatusProps> = ({
    status,
    uuid,
    user_uuid,
}) => {
    const me = useSelector(selectMe);
    const isMe = me.membership_uuid === user_uuid;
    if (isMe && status === constants.STATUS.PENDING.KEY) {
        const dispatch = useDispatch();
        return (
            <div className="contest-participants-table-status-response">
                <CheckCircleTwoTone
                    twoToneColor={constants.STATUS.ACTIVE.TWO_TONE_COLOUR}
                    onClick={() =>
                        dispatch(
                            ContestPageActions.updateContestParticipantStatus(
                                uuid,
                                constants.STATUS.ACTIVE.KEY
                            )
                        )
                    }
                />
                <StopTwoTone
                    twoToneColor={constants.STATUS.INACTIVE.TWO_TONE_COLOUR}
                    onClick={() =>
                        dispatch(
                            ContestPageActions.updateContestParticipantStatus(
                                uuid,
                                constants.STATUS.INACTIVE.KEY
                            )
                        )
                    }
                />
            </div>
        );
    }
    return <Tag color={mapStatusColour(status)}>{status}</Tag>;
};

export default ContestParticipantsTableStatus;
