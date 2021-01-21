import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { Button, Select, Spin } from 'antd';
import { PlusCircleOutlined, UserAddOutlined } from '@ant-design/icons/lib';
import { SearchInputProps } from './types';
import MembersPageSiderContentSearchActions from './actions';
import { selectIsSearching, selectKey, selectSearchData } from './selector';
import CONSTANTS from '@locale/en-CA';
import { withAppRoute } from '@utils';
import routes from '@constants/routes';
import './SearchSelectInput.less';

const { Option } = Select;

const SearchSelectInput: React.FunctionComponent<SearchInputProps> = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const params = useParams();
    const [value, setValue] = useState<any>();
    const data = useSelector(selectSearchData) || [];
    const isSearching = useSelector(selectIsSearching);
    const searchKey = useSelector(selectKey);
    const newMemberKey = 'new';
    const onSearch = (val: string) => {
        dispatch(MembersPageSiderContentSearchActions.search(val));
    };
    const onClick = () => {
        dispatch(MembersPageSiderContentSearchActions.invite(value));
        setValue(undefined);
    };
    const onChange = (newValue: any) => {
        if (newValue === newMemberKey) {
            history.push(
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
        <div className="search-select-input-wrapper">
            <Select
                showSearch
                value={value}
                placeholder={CONSTANTS.PAGES.MEMBERS.SEARCH}
                notFoundContent={isSearching ? <Spin size="small" /> : null}
                filterOption={false}
                onSearch={onSearch}
                onChange={onChange}
                className="search-select-input"
            >
                {data.map((d: any) => (
                    <Option key={d.user_uuid} value={d.user_uuid}>
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
                disabled={!value}
                onClick={onClick}
            />
        </div>
    );
};

export default SearchSelectInput;
