import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import classnames from 'classnames';
import { ContestInfoExtraProps } from './types';
import { selectMyLeagueUUID } from '@selectors/BaseSelector';
import {
    selectContest,
    selectIsOwner,
    selectSubscribed,
} from '@pages/Contest/selector';
import { navigate, withAppRoute } from '@utils';
import routes from '@constants/routes';
import constants from '@constants';
import ContestPageActions from '@pages/Contest/actions';
import './ContestInfoExtra.less';
import { BellTwoTone, EditOutlined } from '@ant-design/icons/lib';

const ContestInfoExtra: React.FunctionComponent<ContestInfoExtraProps> = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const leagueUUID = useSelector(selectMyLeagueUUID);
    const subscribed = useSelector(selectSubscribed);
    const contest = useSelector(selectContest);
    const isOwner = useSelector(selectIsOwner);

    const updateButtonRenderer = () => {
        if (!isOwner) {
            return undefined;
        }
        const disabled =
            contest.status !== constants.STATUS.PENDING.KEY &&
            contest.status !== constants.STATUS.READY.KEY;
        const cx = classnames('update-button', { disabled });
        return (
            <EditOutlined
                onClick={() =>
                    disabled
                        ? null
                        : navigate(
                              history,
                              withAppRoute(routes.ROUTES.CONTEST_UPDATE.ROUTE, {
                                  routeProps: {
                                      league_uuid: leagueUUID,
                                      contest_uuid: contest.uuid,
                                  },
                              }),
                              contest
                          )
                }
                className={cx}
            />
        );
    };

    const subscribeButtonRenderer = () => {
        const { uuid } = contest;
        return (
            <BellTwoTone
                twoToneColor={subscribed ? 'red' : 'green'}
                onClick={() =>
                    subscribed
                        ? dispatch(ContestPageActions.unsubscribe({ uuid }))
                        : dispatch(ContestPageActions.subscribe({ uuid }))
                }
                className="subscription-toggle"
            />
        );
    };

    return (
        <div className="contest-info-extra">
            <div className="contest-info-extra-update">
                {updateButtonRenderer()}
            </div>
            <div className="contest-info-extra-subscription">
                {subscribeButtonRenderer()}
            </div>
        </div>
    );
};

export default ContestInfoExtra;
