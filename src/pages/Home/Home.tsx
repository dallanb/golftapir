import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppLayoutContent } from '@layouts/AppLayout';
import { HomeProps } from './types';
import HomePageActions from './actions';
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
        <AppLayoutContent
            content={<HomeContent />}
            sider={<HomeSider />}
            className="home-view"
        />
    );
};

export default Home;
