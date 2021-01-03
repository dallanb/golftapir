import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Select, Spin } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons/lib';
import { SearchInputProps } from './types';
import LeagueMembersPageSiderContentSearchActions from './actions';
import { selectIsSearching, selectSearchData } from './selector';
import CONSTANTS from '@locale/en-CA';
import './SearchSelectInput.less';

const { Option } = Select;

const SearchSelectInput: React.FunctionComponent<SearchInputProps> = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState<any>();
    const data = useSelector(selectSearchData) || [];
    const isSearching = useSelector(selectIsSearching);
    const onSearch = (val: string) => {
        dispatch(LeagueMembersPageSiderContentSearchActions.search(val));
    };
    const onClick = () => {
        dispatch(LeagueMembersPageSiderContentSearchActions.invite(value));
        setValue(undefined);
    };

    return (
        <div className="search-select-input-wrapper">
            <Select
                showSearch
                value={value}
                placeholder={CONSTANTS.PAGES.LEAGUE_MEMBERS.SEARCH}
                notFoundContent={isSearching ? <Spin size="small" /> : null}
                filterOption={false}
                onSearch={onSearch}
                onChange={setValue}
                className="search-select-input"
            >
                {data.map((d: any) => (
                    <Option key={d.user_uuid} value={d.user_uuid}>
                        {d.display_name}
                    </Option>
                ))}
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
