import React, { useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { get as _get } from 'lodash';
import { AppLayoutContent } from '@layouts/AppLayout';
import { WebSocketContext } from '@contexts';
import { SocketActions } from '@actions';
import { ContestUpdateProps } from './types';
import ContestUpdatePageActions from './actions';
import ContestUpdateContent from './ContestUpdateContent';
import ContestUpdateSider from './ContestUpdateSider';
import {isNextPathContest, socketEventHandlers as eventHandler} from '@pages/Contest/utils';
import './ContestUpdate.less';

const ContestUpdate: React.FunctionComponent<ContestUpdateProps> = () => {
    const dispatch = useDispatch();

    const history = useHistory();
    const params = useParams();
    const contest = _get(history, ['location', 'state'], null);
    const contestUUID = _get(params, ['contest_uuid'], null);
    const { contestTopicWs } = useContext(WebSocketContext);

    useEffect(() => {
        dispatch(ContestUpdatePageActions.preInit(contest));
        dispatch(ContestUpdatePageActions.init(contestUUID));
        dispatch(
            SocketActions.init(
                contestTopicWs,
                { uuid: contestUUID },
                { eventHandler }
            )
        );
        return () => {
            dispatch(ContestUpdatePageActions.terminate());
            if(!isNextPathContest(contestUUID, history.location.pathname)) {
                dispatch(SocketActions.terminate(contestTopicWs));
            }
        };
    }, []);

    return (
        <AppLayoutContent
            content={<ContestUpdateContent />}
            sider={<ContestUpdateSider />}
            className="contests-update-view"
        />
    );
};

export default ContestUpdate;
