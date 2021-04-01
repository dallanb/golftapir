import React from 'react';
import { Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { SearchInputProps } from './types';
import ContestsPageSiderSearchActions from './actions';
import { selectIsSearching } from './selector';
import CONSTANTS from '@locale/en-CA';
import { SiderComponentContent } from '@layouts/ComponentContent';
import './SearchInput.less';

const { Search } = Input;
const SearchInput: React.FunctionComponent<SearchInputProps> = () => {
    const dispatch = useDispatch();
    const isSearching = useSelector(selectIsSearching);
    const onSearch = (value: string) => {
        dispatch(ContestsPageSiderSearchActions.search(value));
    };
    return (
        <SiderComponentContent
            title={CONSTANTS.COMMON.SEARCH}
            className="search-input-component-content"
            bodyClassName={'search-input-component-content-body'}
        >
            <Search
                placeholder={CONSTANTS.PAGES.CONTESTS.SEARCH}
                allowClear
                enterButton
                loading={isSearching}
                onSearch={onSearch}
                className="search-input"
            />
        </SiderComponentContent>
    );
};

export default SearchInput;
