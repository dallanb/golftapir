import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { get as _get } from 'lodash';
import { ContentLayout } from '@layouts';
import { ContestUpdateProps } from './types';
import ContestUpdatePageActions from './actions';
import ContestUpdateHeader from './ContestUpdateHeader';
import ContestUpdateContent from './ContestUpdateContent';
import ContestUpdateSider from './ContestUpdateSider';
import { selectData } from './selector';
import './ContestUpdate.less';

const ContestUpdate: React.FunctionComponent<ContestUpdateProps> = () => {
    const dispatch = useDispatch();

    const history = useHistory();
    const contest = _get(history, ['location', 'state'], null);

    const { isInitialized } = useSelector(selectData);

    useEffect(() => {
        dispatch(ContestUpdatePageActions.init(contest));
        return () => {
            dispatch(ContestUpdatePageActions.terminate());
        };
    }, []);

    return (
        <ContentLayout
            header={<ContestUpdateHeader />}
            content={<ContestUpdateContent />}
            sider={<ContestUpdateSider />}
            // showSpinner={!isInitialized}
            className="contests-update-view"
        />
    );
};

export default ContestUpdate;
