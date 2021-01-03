import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { get as _get } from 'lodash';
import { ContentLayout } from '@layouts';
import { CompetitorProps } from './types';
import CompetitorPageActions from './actions';
import CompetitorHeader from './CompetitorHeader';
import CompetitorContent from './CompetitorContent';
import CompetitorSider from './CompetitorSider';
import { selectData } from './selector';
import './Competitor.less';

const Competitor: React.FunctionComponent<CompetitorProps> = () => {
    const dispatch = useDispatch();

    const history = useHistory();
    const competitor = _get(history, ['location', 'state'], null);
    const { isInitialized } = useSelector(selectData);

    useEffect(() => {
        dispatch(CompetitorPageActions.preInit(competitor));
        dispatch(CompetitorPageActions.init(competitor.member_uuid));
        return () => {
            dispatch(CompetitorPageActions.terminate());
        };
    }, []);

    return (
        <ContentLayout
            header={<CompetitorHeader />}
            content={<CompetitorContent />}
            sider={<CompetitorSider />}
            // showSpinner={!isInitialized}
            className="competitor-view"
        />
    );
};

export default Competitor;
