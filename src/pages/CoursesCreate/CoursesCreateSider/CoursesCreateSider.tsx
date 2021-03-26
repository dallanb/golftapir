import React from 'react';
import AppLayoutSider from '@layouts/AppLayout/AppLayoutSider';
import CoursesCreateSiderContent from './CoursesCreateSiderContent';
import { CoursesCreateSiderProps } from './types';

const CoursesCreateSider: React.FunctionComponent<CoursesCreateSiderProps> = () => {
    return <AppLayoutSider content={<CoursesCreateSiderContent />} />;
};

export default CoursesCreateSider;
