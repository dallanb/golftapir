import React from 'react';
import LeagueAppLayoutSider from '@layouts/AppLayout/LeagueAppLayoutSider';
import CoursesCreateSiderContent from './CoursesCreateSiderContent';
import { CoursesCreateSiderProps } from './types';

const CoursesCreateSider: React.FunctionComponent<CoursesCreateSiderProps> = () => {
    return <LeagueAppLayoutSider content={<CoursesCreateSiderContent />} />;
};

export default CoursesCreateSider;
