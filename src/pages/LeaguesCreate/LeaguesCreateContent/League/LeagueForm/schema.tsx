import React from 'react';
import * as Yup from 'yup';
import { CloudUploadOutlined } from '@ant-design/icons';
// import LeaguesCreatePageContentLeagueSearchMemberActions from './LeagueFormSearch/Member/actions';
import {
    FloatLabelInputWrapper,
    ImgCropWrapper,
    NestedInputWrapper,
} from '@components';
// import { memberSearchSelectOptionRenderer } from './utils';
// import { searchSelectTagRenderer } from '@utils';
import CONSTANTS from '@locale/en-CA';
import constants from '@constants';

const FORM = CONSTANTS.PAGES.LEAGUES_CREATE.FORM;

export const fieldSchema = [
    {
        name: 'avatar',
        type: 'upload',
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
    //     name: 'members',
    //     type: 'search-select',
    //     wrapper: FloatLabelInputWrapper,
    //     wrapperOptions: {
    //         label: FORM.LABELS.MEMBERS,
    //         className: 'league-form-members-input',
    //     },
    //     options: {
    //         ref: React.createRef<any>(),
    //         onSearch: (value: string) =>
    //             LeaguesCreatePageContentLeagueSearchMemberActions.search(value),
    //         mode: 'multiple',
    //         debounce: 500,
    //         optionRenderer: memberSearchSelectOptionRenderer,
    //         tagRenderer: searchSelectTagRenderer,
    //     },
    // },
];

export const validationSchema = Yup.object({
    name: Yup.string().required(FORM.VALIDATION.NAME_REQUIRED),
    avatar: Yup.string(),
    // members: Yup.array(),
});
