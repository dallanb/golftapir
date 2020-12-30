import React from 'react';
import * as Yup from 'yup';
import moment, { Moment } from 'moment';
import { CloudUploadOutlined } from '@ant-design/icons';
import LeaguesCreatePageContentLeagueSearchParticipantActions from './LeagueFormSearch/Participant/actions';
import {
    BasicInputWrapper,
    FloatLabelInputWrapper,
    ImgCropWrapper,
    NestedInputWrapper,
} from '@components';
import { participantSearchSelectOptionRenderer } from './utils';
import { searchSelectTagRenderer } from '@utils';
import CONSTANTS from '@locale/en-CA';
import constants from '@constants';

const FORM = CONSTANTS.PAGES.LEAGUES_CREATE.FORM;

export const fieldSchema = [
    {
        name: 'avatar',
        type: 'avatar',
        wrapper: ImgCropWrapper,
        wrapperOptions: {
            valuePropName: 'file',
            className: 'league-form-avatar-upload',
            modalTitle: FORM.LABELS.AVATAR_CROPPER_TITLE,
        },
        options: {
            uploadLabel: FORM.LABELS.UPLOAD_AVATAR,
            uploadIcon: CloudUploadOutlined,
            uploadS3Folder: constants.S3_FOLDERS.LEAGUE.AVATAR,
        },
    },
    {
        name: 'input-group',
        wrapper: NestedInputWrapper,
        wrapperOptions: {
            className: 'league-form-input-group',
        },
        options: {},
        fields: [
            {
                name: 'name',
                wrapper: FloatLabelInputWrapper,
                wrapperOptions: {
                    label: FORM.LABELS.NAME,
                    className: 'league-form-name-input',
                },
            },
        ],
    },
    // {
    //     name: 'participants',
    //     type: 'search-select',
    //     wrapper: FloatLabelInputWrapper,
    //     wrapperOptions: {
    //         label: FORM.LABELS.PARTICIPANTS,
    //         className: 'league-form-participants-input',
    //     },
    //     options: {
    //         ref: React.createRef<any>(),
    //         onSearch: (value: string) =>
    //             LeaguesCreatePageContentLeagueSearchParticipantActions.search(
    //                 value
    //             ),
    //         mode: 'multiple',
    //         debounce: 500,
    //         optionRenderer: participantSearchSelectOptionRenderer,
    //         tagRenderer: searchSelectTagRenderer,
    //     },
    // },
];

export const validationSchema = Yup.object({
    name: Yup.string().required(FORM.VALIDATION.NAME_REQUIRED),
    avatar: Yup.string(),
    // participants: Yup.array(),
});
