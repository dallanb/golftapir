import React from 'react';
import { ContentLayoutContent } from '@layouts';
import Course from './Course';
import { CoursesCreateContentProps } from './types';

const CoursesCreateContent: React.FunctionComponent<CoursesCreateContentProps> = ({}) => {
    return (
        <ContentLayoutContent>
            <Course />
        </ContentLayoutContent>
    );
};

export default CoursesCreateContent;
