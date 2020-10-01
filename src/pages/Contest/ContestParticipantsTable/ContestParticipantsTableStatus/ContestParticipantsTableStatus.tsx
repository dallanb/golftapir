import React from 'react';
import { Tag } from 'antd';
import { useDispatch } from 'react-redux';
import { CheckCircleTwoTone, StopTwoTone } from '@ant-design/icons/lib';
import { ContestParticipantsTableStatusProps } from './types';
import { mapStatusColour } from '@pages/Contest/utils';
import { ContestActions } from '@actions';
import constants from '@constants';

const ContestParticipantsTableStatus: React.FunctionComponent<ContestParticipantsTableStatusProps> = ({
    status,
    uuid,
    is_me,
}) => {
    console.log(status);
    console.log(is_me);
    console.log(uuid);
    if (is_me && status === constants.STATUS.PENDING.KEY) {
        const dispatch = useDispatch();
        return (
            <div>
                <CheckCircleTwoTone
                    twoToneColor={constants.STATUS.ACTIVE.TWO_TONE_COLOUR}
                    onClick={() =>
                        dispatch(
                            ContestActions.updateContestParticipant(uuid, {
                                status: constants.STATUS.ACTIVE.KEY,
                            })
                        )
                    }
                />
                <StopTwoTone
                    twoToneColor={constants.STATUS.INACTIVE.TWO_TONE_COLOUR}
                    onClick={() =>
                        dispatch(
                            ContestActions.updateContestParticipant(uuid, {
                                status: constants.STATUS.INACTIVE.KEY,
                            })
                        )
                    }
                />
            </div>
        );
    }
    return <Tag color={mapStatusColour(status)}>{status}</Tag>;
};

export default ContestParticipantsTableStatus;
