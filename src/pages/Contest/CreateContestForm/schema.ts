import React from 'react';
import * as Yup from 'yup';
import 'yup-phone';
import AccountActions from '../../../reducers/AccountReducer';
import InputWrapper from '../../../components/InputWrapper';
import SearchWrapper from './SearchWrapper';
import { participantSearchSelectOptionRenderer } from './utils';

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
        type: 'search-select',
        wrapper: SearchWrapper,
        wrapperOptions: {
            label: 'Participants',
        },
        options: {
            ref: React.createRef<any>(),
            onSearch: (value: string) => AccountActions.searchAccounts(value),
            multiple: true,
            debounce: 500,
            optionRenderer: (participants: any[]) =>
                participantSearchSelectOptionRenderer(participants),
        },
    },
];

export const validationSchema = Yup.object({
    owner_uuid: Yup.string(),
    sport_uuid: Yup.string(),
});
