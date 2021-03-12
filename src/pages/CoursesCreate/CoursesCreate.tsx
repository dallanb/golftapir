import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContentLayout } from '@layouts';
import { CoursesCreateProps } from './types';
import CoursesCreatePageActions from './actions';
import CoursesCreateContent from './CoursesCreateContent';
import CoursesCreateSider from './CoursesCreateSider';
import { selectData } from './selector';
import './CoursesCreate.less';

const CoursesCreate: React.FunctionComponent<CoursesCreateProps> = () => {
    const dispatch = useDispatch();

    const { isInitialized } = useSelector(selectData);

    useEffect(() => {
        dispatch(CoursesCreatePageActions.init());
        return () => {
            dispatch(CoursesCreatePageActions.terminate());
        };
    }, []);

    return (
        <ContentLayout
            content={<CoursesCreateContent />}
            sider={<CoursesCreateSider />}
            className="courses-create-view"
        />
    );
};

export default CoursesCreate;
