import React from 'react';
import * as Yup from 'yup';
import 'yup-phone';
import AccountActions from '@actions/AccountActions';
import InputWrapper from '@components/InputWrapper';
import { participantSearchSelectOptionRenderer } from './utils';
import CONSTANTS from '@locale/en-CA';

const FORM = CONSTANTS.PAGES.CONTESTS_CREATE.FORM;

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
        name: 'name',
        wrapper: InputWrapper,
        wrapperOptions: {
            label: FORM.LABELS.NAME,
        },
    },
    {
        name: 'participants',
        type: 'search-select',
        wrapper: InputWrapper,
        wrapperOptions: {
            label: FORM.LABELS.PARTICIPANTS,
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
    name: Yup.string().required(FORM.VALIDATION.NAME_REQUIRED),
    participants: Yup.array(),
});
