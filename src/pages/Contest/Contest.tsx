import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { get as _get } from 'lodash';
import { AppLayoutContent } from '@layouts/AppLayout';
import { ContestProps } from './types';
import ContestPageActions from './actions';
import ContestSider from './ContestSider';
import ContestContent from './ContestContent';
import './Contest.less';

const Contest: React.FunctionComponent<ContestProps> = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const state = _get(history, ['location', 'state'], null);

    useEffect(() => {
        dispatch(ContestPageActions.preInit(state));
        dispatch(ContestPageActions.init(state.uuid));
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
