import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { get as _get } from 'lodash';
import { ContestProps } from './types';
import { selectData } from './selector';
import { ContentLayout } from '@layouts';
import constants from '@constants';
import ContestPageActions from './actions';
import ContestParticipantsTable from './ContestParticipantsTable';
import ContestStatus from './ContestStatus';
import ContestActions from './ContestActions';
import ContestSubscription from './ContestSubscription';
import ContestAvatar from './ContestAvatar';
import ContestStartTime from './ContestStartTime';
import ContestLeadersTable from './ContestLeadersTable';
import './Contest.scss';
import { mapStatusColour, withS3URL } from '@utils';
import { Tag } from 'antd';

const Contest: React.FunctionComponent<ContestProps> = () => {
    const dispatch = useDispatch();

    const history = useHistory();

    const [uuid] = useState(_get(history, ['location', 'state', 'uuid'], null));
    const [name] = useState(_get(history, ['location', 'state', 'name'], null));
    const [status] = useState(
        _get(history, ['location', 'state', 'status'], null)
    );
    const [src] = useState(_get(history, ['location', 'state', 'src'], null));

    useEffect(() => {
        dispatch(ContestPageActions.init(uuid));
        return () => {
            dispatch(ContestPageActions.terminate());
        };
    }, []);

    const { description, isInitialized, contest } = useSelector(selectData);

    const generateActions = () => {
        return [
            {
                key: constants.ACTION.UPDATE.KEY,
                onClick: () =>
                    history.push(`/app${constants.ROUTES.CONTEST_UPDATE}`, {
                        contest,
                    }),
            },
            {
                key: constants.ACTION.READY.KEY,
                onClick: () => dispatch(ContestPageActions.readyContest(uuid)),
            },
            {
                key: constants.ACTION.ACTIVATE.KEY,
                onClick: () => ContestPageActions.activateContest(uuid),
            },
            {
                key: constants.ACTION.MATCHUP.KEY,
                onClick: () =>
                    history.push(`/app${constants.ROUTES.CONTEST_MATCHUP}`, {
                        contest,
                    }),
            },
        ];
    };

    return (
        <ContentLayout
            title={name}
            subTitle={<ContestSubscription uuid={uuid} />}
            showSpinner={!isInitialized}
            avatar={{
                src,
                name,
                size: 72,
            }}
            tags={<Tag color={mapStatusColour(status)}>{status}</Tag>}
            extra={<ContestActions actions={generateActions()} />}
            className="contest-view"
        >
            <ContestStartTime />
            <ContestParticipantsTable />
            <ContestLeadersTable />
        </ContentLayout>
    );
};

export default Contest;
