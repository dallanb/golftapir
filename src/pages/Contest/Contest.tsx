import React, { useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { get as _get } from 'lodash';
import { AppLayoutContent } from '@layouts/AppLayout';
import { ContestProps } from './types';
import ContestPageActions from './actions';
import ContestSider from './ContestSider';
import ContestContent from './ContestContent';
import './Contest.less';

const Contest: React.FunctionComponent<ContestProps> = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const contestUUID = _get(params, ['contest_uuid'], null);

    useEffect(() => {
        dispatch(ContestPageActions.init(contestUUID));
        return () => {
            dispatch(ContestPageActions.terminate());
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
