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
import './ContestUpdate.less';

const ContestUpdate: React.FunctionComponent<ContestUpdateProps> = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const contestUUID = _get(params, ['contest_uuid'], null);

    useEffect(() => {
        dispatch(ContestUpdatePageActions.init(contestUUID));
        return () => {
            dispatch(ContestUpdatePageActions.terminate());
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
