import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContentLayout } from '@layouts';
import { HomeProps } from './types';
import HomePageActions from './actions';
import HomeHeader from './HomeHeader';
import HomeContent from './HomeContent';
import HomeSider from './HomeSider';
import { selectData } from './selector';
import './Home.less';

const Home: React.FunctionComponent<HomeProps> = () => {
    const dispatch = useDispatch();
    const { isInitialized } = useSelector(selectData);

    useEffect(() => {
        dispatch(HomePageActions.init());
        return () => {
            dispatch(HomePageActions.terminate());
        };
    }, []);

    return (
        <ContentLayout
            header={<HomeHeader />}
            content={<HomeContent />}
            sider={<HomeSider />}
            // showSpinner={!isInitialized}
            className="home-view"
        />
    );
};

export default Home;
