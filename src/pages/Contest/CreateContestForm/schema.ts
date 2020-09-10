import React from 'react';
import * as Yup from 'yup';
import 'yup-phone';
import AccountActions from '../../../reducers/AccountReducer';
import InputWrapper from '../../../components/InputWrapper';
import SearchWrapper from './SearchWrapper';

export const fieldSchema = [
    {
        name: 'owner_uuid',
        wrapper: InputWrapper,
        wrapperOptions: {
            hidden: true,
        },
        options: {},
    },
    {
        name: 'sport_uuid',
        wrapper: InputWrapper,
        wrapperOptions: {
            hidden: true,
        },
        options: {},
    },
    {
        name: 'participants',
        type: 'search',
        wrapper: SearchWrapper,
        wrapperOptions: {
            label: 'Participants',
        },
        options: {
            ref: React.createRef<any>(),
            onSearch: (value: string) => AccountActions.searchAccounts(value),
        },
    },
];

export const validationSchema = Yup.object({
    owner_uuid: Yup.string(),
    sport_uuid: Yup.string(),
});
