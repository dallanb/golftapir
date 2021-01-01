import { Select } from 'antd';
import { keyBy as _keyBy, get as _get } from 'lodash';
import React from 'react';
import { useSelector } from 'react-redux';
import { FormikProps, FormikValues } from 'formik';
import { selectSearchData as selectMemberSearchData } from './LeagueFormSearch/Member/selector';

export const memberSearchSelectOptionRenderer = (
    formik: FormikProps<FormikValues>
) => {
    const permanentMembers = _get(formik, ['values', 'permanent_members'], {});
    const memberSearch = useSelector(selectMemberSearchData) || [];
    const members = _keyBy(
        [...memberSearch, ...permanentMembers],
        'membership_uuid'
    );
    return Object.values(members).map(
        (member: { membership_uuid: string; display_name: string }) => (
            <Select.Option
                key={member.membership_uuid}
                value={member.membership_uuid}
                disabled={
                    permanentMembers.findIndex(
                        ({ membership_uuid }: { membership_uuid: string }) =>
                            membership_uuid === member.membership_uuid
                    ) > -1
                }
            >
                {member.display_name}
            </Select.Option>
        )
    );
};
