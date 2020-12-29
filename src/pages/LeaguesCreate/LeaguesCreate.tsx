import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContentLayout } from '@layouts';
import { LeaguesCreateProps } from './types';
import LeaguesCreatePageActions from './actions';
import LeaguesCreateHeader from './LeaguesCreateHeader';
import LeaguesCreateContent from './LeaguesCreateContent';
import LeaguesCreateSider from './LeaguesCreateSider';
import { selectData } from './selector';
import './LeaguesCreate.less';

const LeaguesCreate: React.FunctionComponent<LeaguesCreateProps> = () => {
    const dispatch = useDispatch();

    const { isInitialized } = useSelector(selectData);

    useEffect(() => {
        dispatch(LeaguesCreatePageActions.init());
        return () => {
            dispatch(LeaguesCreatePageActions.terminate());
        };
    }, []);

    return (
        <ContentLayout
            header={<LeaguesCreateHeader />}
            content={<LeaguesCreateContent />}
            sider={<LeaguesCreateSider />}
            // showSpinner={!isInitialized}
            className="leagues-create-view"
        />
    );
};

export default LeaguesCreate;
