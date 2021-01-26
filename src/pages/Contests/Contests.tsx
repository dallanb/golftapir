import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContestsProps } from './types';
import { ContentLayout } from '@layouts';
import { selectData } from './selector';
import ContestsPageActions from './actions';
import ContestsSider from './ContestsSider';
import ContestsHeader from './ContestsHeader';
import ContestsContent from './ContestsContent';
import './Contests.less';

const Contests: React.FunctionComponent<ContestsProps> = () => {
    const dispatch = useDispatch();
    const { isInitialized } = useSelector(selectData);

    useEffect(() => {
        dispatch(ContestsPageActions.init());
        return () => {
            dispatch(ContestsPageActions.terminate());
        };
    }, []);

    return (
        <ContentLayout
            // header={<ContestsHeader />}
            sider={<ContestsSider />}
            content={<ContestsContent />}
            // showSpinner={!isInitialized}
            className="contests-view"
        />
    );
};

export default Contests;
