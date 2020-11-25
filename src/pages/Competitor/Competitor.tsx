import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { get as _get } from 'lodash';
import { ContentLayout } from '@layouts';
import { CompetitorProps } from './types';
import CompetitorPageActions from './actions';
import CompetitorHeader from './header';
import CompetitorContent from './content';
import CompetitorSider from './sider';
import { selectData } from './selector';
import './Competitor.scss';

const Competitor: React.FunctionComponent<CompetitorProps> = () => {
    const dispatch = useDispatch();

    const history = useHistory();
    const competitor = _get(history, ['location', 'state'], null);
    const { isInitialized } = useSelector(selectData);

    useEffect(() => {
        dispatch(CompetitorPageActions.preInit(competitor));
        dispatch(CompetitorPageActions.init(competitor.uuid));
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
        />
    );
};

export default Competitor;
