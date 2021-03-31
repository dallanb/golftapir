import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { get as _get } from 'lodash';
import { AppLayoutContent } from '@layouts/AppLayout';
import { ContestProps } from './types';
import ContestPageActions from './actions';
import ContestSider from './ContestSider';
import ContestContent from './ContestContent';
import { WebSocketContext } from '@contexts';
import { SocketActions } from '@actions';
import { socketEventHandlers as eventHandler } from './utils';
import './Contest.less';

const Contest: React.FunctionComponent<ContestProps> = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const state = _get(history, ['location', 'state'], null);
    const { contestTopicWs } = useContext(WebSocketContext);

    useEffect(() => {
        dispatch(ContestPageActions.preInit(state));
        dispatch(ContestPageActions.init(state.uuid));
        dispatch(
            SocketActions.init(
                contestTopicWs,
                { uuid: state.uuid },
                { eventHandler }
            )
        );
        return () => {
            dispatch(ContestPageActions.terminate());
            dispatch(SocketActions.terminate(contestTopicWs));
        };
    }, []);

    return (
        <AppLayoutContent
            sider={<ContestSider />}
            content={<ContestContent />}
            className="contest-view"
        />
    );
};

export default Contest;
