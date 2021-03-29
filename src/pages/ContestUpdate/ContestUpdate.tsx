import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { get as _get } from 'lodash';
import { AppLayoutContent } from '@layouts/AppLayout';
import { ContestUpdateProps } from './types';
import ContestUpdatePageActions from './actions';
import ContestUpdateContent from './ContestUpdateContent';
import ContestUpdateSider from './ContestUpdateSider';
import './ContestUpdate.less';

const ContestUpdate: React.FunctionComponent<ContestUpdateProps> = () => {
    const dispatch = useDispatch();

    const history = useHistory();
    const contest = _get(history, ['location', 'state'], null);

    useEffect(() => {
        dispatch(ContestUpdatePageActions.init(contest));
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
