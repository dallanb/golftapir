import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { get as _get } from 'lodash';
import { ContentLayout } from '@layouts';
import { HomeProps } from './types';
import HomePageActions from './actions';
import { withS3URL } from '@utils';
import { selectData } from './selector';
import { selectMe } from '@selectors/BaseSelector';
import './Home.scss';

const Home: React.FunctionComponent<HomeProps> = ({}) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(HomePageActions.init());
        return () => {
            dispatch(HomePageActions.terminate());
        };
    }, []);

    const { title, description, isInitialized } = useSelector(selectData);
    const { first_name, last_name, avatar } = useSelector(selectMe);
    const src = _get(avatar, ['s3_filename'], undefined);
    return (
        <ContentLayout
            title={title}
            subTitle={description}
            avatar={{
                src: src && withS3URL(src),
                name: `${first_name} ${last_name}`,
                size: 72,
            }}
            showSpinner={!isInitialized}
        >
            <div className="home-page-view" />
        </ContentLayout>
    );
};
export default Home;
