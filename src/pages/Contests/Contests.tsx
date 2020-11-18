import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ContestsList from './ContestsList';
import ContestsSider from './ContestsSider';
import { ContestsProps } from './types';
import ContestsPageActions from './actions';
import { selectData } from './selector';
import { ContentLayout } from '@layouts';
import './Contests.scss';

const Contests: React.FunctionComponent<ContestsProps> = () => {
    const dispatch = useDispatch();

    const history = useHistory();
    useEffect(() => {
        dispatch(ContestsPageActions.init());
        return () => {
            dispatch(ContestsPageActions.terminate());
        };
    }, []);

    const { title, description, isInitialized } = useSelector(selectData);

    return (
        <ContentLayout
            title={title}
            subTitle={description}
            sider={<ContestsSider />}
            showSpinner={!isInitialized}
            className="contests-view"
        >
            {/*<ContestsCreateButton history={history} />*/}
            <ContestsList history={history} />
        </ContentLayout>
    );
};

export default Contests;
