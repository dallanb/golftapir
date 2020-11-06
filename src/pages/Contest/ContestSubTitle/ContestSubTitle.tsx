import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BellTwoTone, EditOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { ContestSubTitleProps } from './types';
import ContestPageActions from '../actions';
import { selectContest, selectIsOwner, selectSubscribed } from '../selector';
import './ContestSubTitle.scss';
import constants from '@constants';
import { useHistory } from 'react-router-dom';

const ContestSubTitle: React.FunctionComponent<ContestSubTitleProps> = ({
    uuid,
}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const subscribed = useSelector(selectSubscribed);
    const contest = useSelector(selectContest);
    const isOwner = useSelector(selectIsOwner);

    const updateButtonRenderer = () => {
        if (!isOwner) {
            return undefined;
        }
        return (
            <Button
                icon={<EditOutlined />}
                onClick={() =>
                    history.push(`/app${constants.ROUTES.CONTEST_UPDATE}`, {
                        contest,
                    })
                }
                className="update-button"
                type="text"
            />
        );
    };

    const subscribeButtonRenderer = () => {
        return (
            <Button
                icon={
                    <BellTwoTone twoToneColor={subscribed ? 'red' : 'green'} />
                }
                onClick={() =>
                    subscribed
                        ? dispatch(ContestPageActions.unsubscribe({ uuid }))
                        : dispatch(ContestPageActions.subscribe({ uuid }))
                }
                className="subscription-toggle"
                type="text"
            />
        );
    };

    return (
        <div className="contest-sub-title">
            <div className="contest-sub-title-update">
                {updateButtonRenderer()}
            </div>
            <div className="contest-sub-title-subscription">
                {subscribeButtonRenderer()}
            </div>
        </div>
    );
};
export default ContestSubTitle;
