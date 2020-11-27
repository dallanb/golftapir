import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { get as _get } from 'lodash';
import { ContentLayout } from '@layouts';
import { ContestProps } from './types';
import { selectData } from './selector';
import ContestPageActions from './actions';
import ContestHeader from './ContestHeader';
import ContestSider from './ContestSider';
import ContestContent from './ContestContent';
import './Contest.scss';

const Contest: React.FunctionComponent<ContestProps> = () => {
    const dispatch = useDispatch();

    const history = useHistory();
    const contest = _get(history, ['location', 'state'], null);
    const { isInitialized } = useSelector(selectData);

    useEffect(() => {
        dispatch(ContestPageActions.preInit(contest));
        dispatch(ContestPageActions.init(contest.uuid));
        return () => {
            dispatch(ContestPageActions.terminate());
        };
    }, []);

    return (
        <ContentLayout
            header={<ContestHeader />}
            sider={<ContestSider />}
            content={<ContestContent />}
            // showSpinner={!isInitialized}
            className="contest-view"
        />
    );
};

export default Contest;
