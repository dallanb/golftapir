import React from 'react';
import { Tag } from 'antd';
import { useDispatch } from 'react-redux';
import { CheckCircleTwoTone, StopTwoTone } from '@ant-design/icons/lib';
import { ContestWagersTableStatusProps } from './types';
import { mapStatusColour } from '@utils';
import { ContestActions } from '@actions';
import constants from '@constants';
import './ContestWagersTableStatus.scss';

const ContestWagersTableStatus: React.FunctionComponent<ContestWagersTableStatusProps> = ({
    status,
    uuid,
    is_me,
}) => {
    if (is_me && status === constants.STATUS.PENDING.KEY) {
        const dispatch = useDispatch();
        return (
            <div className="contest-wagers-table-status-response">
                <CheckCircleTwoTone
                    twoToneColor={constants.STATUS.ACTIVE.TWO_TONE_COLOUR}
                    onClick={() =>
                        dispatch(
                            ContestActions.updateContestWager(uuid, {
                                status: constants.STATUS.ACTIVE.KEY,
                            })
                        )
                    }
                />
                <StopTwoTone
                    twoToneColor={constants.STATUS.INACTIVE.TWO_TONE_COLOUR}
                    onClick={() =>
                        dispatch(
                            ContestActions.updateContestWager(uuid, {
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

export default ContestWagersTableStatus;
