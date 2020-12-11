import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CompetitorsProps } from './types';
import { ContentLayout } from '@layouts';
import { selectData } from './selector';
import CompetitorsPageActions from './actions';
import CompetitorsSider from './CompetitorsSider';
import CompetitorsHeader from './CompetitorsHeader';
import CompetitorsContent from './CompetitorsContent';
import './Competitors.less';

const Competitors: React.FunctionComponent<CompetitorsProps> = () => {
    const dispatch = useDispatch();
    const { isInitialized } = useSelector(selectData);

    useEffect(() => {
        dispatch(CompetitorsPageActions.init());
        return () => {
            dispatch(CompetitorsPageActions.terminate());
        };
    }, []);

    return (
        <ContentLayout
            header={<CompetitorsHeader />}
            sider={<CompetitorsSider />}
            content={<CompetitorsContent />}
            // showSpinner={!isInitialized}
            className="competitors-view"
        />
    );
};

export default Competitors;
