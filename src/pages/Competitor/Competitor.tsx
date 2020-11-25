import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { get as _get } from 'lodash';
import { ContentLayout } from '@layouts';
import { CompetitorProps } from './types';
import CompetitorPageActions from './actions';
import CompetitorHeader from './header';
import CompetitorContent from './content';
import CompetitorSider from './sider';
import './Competitor.scss';

const Competitor: React.FunctionComponent<CompetitorProps> = () => {
    const dispatch = useDispatch();

    const history = useHistory();
    const competitor = _get(history, ['location', 'state'], null);

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
        />
    );
};

export default Competitor;
