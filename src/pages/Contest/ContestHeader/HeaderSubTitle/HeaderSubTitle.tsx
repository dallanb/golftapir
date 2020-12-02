import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BellTwoTone, EditOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { HeaderSubTitleProps } from './types';
import ContestPageActions from '@pages/Contest/actions';
import {
    selectContest,
    selectIsOwner,
    selectSubscribed,
} from '@pages/Contest/selector';
import constants from '@constants';
import { useHistory } from 'react-router-dom';
import './HeaderSubTitle.scss';

const HeaderSubTitle: React.FunctionComponent<HeaderSubTitleProps> = () => {
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
                    history.push(
                        `/app${constants.ROUTES.CONTEST_UPDATE.ROUTE}`,
                        contest
                    )
                }
                className="update-button"
                type="text"
            />
        );
    };

    const subscribeButtonRenderer = () => {
        const { uuid } = contest;
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
        <div className="header-sub-title">
            <div className="header-sub-title-update">
                {updateButtonRenderer()}
            </div>
            <div className="header-sub-title-subscription">
                {subscribeButtonRenderer()}
            </div>
        </div>
    );
};
export default HeaderSubTitle;
