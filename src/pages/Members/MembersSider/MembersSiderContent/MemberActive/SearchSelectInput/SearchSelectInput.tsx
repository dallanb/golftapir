import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { Button, Select, Spin } from 'antd';
import { debounce as _debounce, isNil as _isNil } from 'lodash';
import {
    CloseOutlined,
    PlusCircleOutlined,
    UserAddOutlined,
} from '@ant-design/icons/lib';
import { SearchInputProps } from './types';
import MembersPageSiderContentSearchActions from './actions';
import { selectIsSearching, selectKey, selectSearchData } from './selector';
import CONSTANTS from '@locale/en-CA';
import { navigate, withAppRoute } from '@utils';
import { selectLeagueMembersDataByStatus } from '@selectors/AppSelector';
import ComponentContent from '@layouts/ComponentContent';
import routes from '@constants/routes';
import './SearchSelectInput.less';
import { checkMemberLimit } from '@pages/Members/MembersSider/MembersSiderContent/MemberActive/SearchSelectInput/utils';

const { Option } = Select;

const SearchSelectInput: React.FunctionComponent<SearchInputProps> = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const params = useParams();
    const [value, setValue] = useState<any>();
    const members = useSelector(selectLeagueMembersDataByStatus);
    const disabled = checkMemberLimit(members);
    const data = useSelector(selectSearchData) || [];
    const isSearching = useSelector(selectIsSearching);
    const searchKey = useSelector(selectKey);
    const newMemberKey = 'new';

    const onSearch = (val: string) => {
        if (val) {
            dispatch(MembersPageSiderContentSearchActions.search(val));
        } else {
            dispatch(MembersPageSiderContentSearchActions.clearSearch(val));
        }
    };
    const onClick = () => {
        dispatch(
            MembersPageSiderContentSearchActions.invite(
                data[value].user_uuid,
                data[value].email
            )
        );
        setValue(undefined);
    };
    const onChange = (newValue: any) => {
        if (newValue === newMemberKey) {
            navigate(
                history,
                withAppRoute(routes.ROUTES.MEMBERS_CREATE.ROUTE, {
                    routeProps: { ...params },
                }),
                { email: searchKey }
            );
        } else {
            return setValue(newValue);
        }
    };

    return (
        <ComponentContent
            className="search-input-component-content"
            bodyClassName={'search-input-component-content-body'}
            title={'Invite'}
        >
            <div className="search-select-input-wrapper">
                <Select
                    showSearch
                    disabled={disabled}
                    value={value}
                    placeholder={CONSTANTS.PAGES.MEMBERS.SEARCH}
                    loading={isSearching}
                    filterOption={false}
                    onSearch={_debounce(onSearch, 300, { maxWait: 1000 })}
                    onChange={onChange}
                    className="search-select-input"
                >
                    {data.map((d: any, index: number) => (
                        <Option key={index} value={index}>
                            {d.display_name}
                        </Option>
                    ))}
                    <Option
                        key={newMemberKey}
                        value={newMemberKey}
                        className="search-select-input-new-invite"
                    >
                        <UserAddOutlined /> Invite to App
                    </Option>
                </Select>
                <Button
                    type="primary"
                    icon={<PlusCircleOutlined />}
                    className="invite-button"
                    disabled={_isNil(value)}
                    onClick={onClick}
                />
            </div>
        </ComponentContent>
    );
};

export default SearchSelectInput;
