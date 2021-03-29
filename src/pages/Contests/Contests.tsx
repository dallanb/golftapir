import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContestsProps } from './types';
import { AppLayoutContent } from '@layouts/AppLayout';
import { selectData } from './selector';
import ContestsPageActions from './actions';
import ContestsSider from './ContestsSider';
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
        <AppLayoutContent
            sider={<ContestsSider />}
            content={<ContestsContent />}
            className="contests-view"
        />
    );
};

export default Contests;
