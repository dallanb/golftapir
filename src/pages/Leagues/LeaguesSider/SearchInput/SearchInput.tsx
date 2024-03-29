import React from 'react';
import { Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { SearchInputProps } from './types';
import LeaguesPageSiderSearchActions from './actions';
import { selectIsSearching } from './selector';
import CONSTANTS from '@locale/en-CA';
import './SearchInput.less';

const { Search } = Input;
const SearchInput: React.FunctionComponent<SearchInputProps> = () => {
    const dispatch = useDispatch();
    const isSearching = useSelector(selectIsSearching);
    const onSearch = (value: string) => {
        dispatch(LeaguesPageSiderSearchActions.search(value));
    };
    return (
        <Search
            placeholder={CONSTANTS.PAGES.LEAGUES.SEARCH}
            allowClear
            enterButton
            loading={isSearching}
            onSearch={onSearch}
            className="search-input"
        />
    );
};

export default SearchInput;
