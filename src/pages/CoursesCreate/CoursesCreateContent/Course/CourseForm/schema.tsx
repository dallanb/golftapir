import React from 'react';
import * as Yup from 'yup';
import { BasicInputWrapper } from '@components';
import CONSTANTS from '@locale/en-CA';

const FORM = CONSTANTS.PAGES.COURSES_CREATE.FORM;

export const fieldSchema = [
    {
        name: 'league_uuid',
        wrapper: BasicInputWrapper,
        wrapperOptions: {
            hidden: true,
        },
        options: {},
    },
];

export const validationSchema = Yup.object({});
