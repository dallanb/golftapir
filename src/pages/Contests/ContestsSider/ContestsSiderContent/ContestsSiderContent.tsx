import React from 'react';
import ComponentContent from '@layouts/ComponentContent';
import SiderLayoutContent from '@layouts/SiderLayout/SiderLayoutContent';
import CreateButton from './CreateButton';
import SearchInput from './SearchInput';
import FilterSelect from './FilterSelect';
import { ContestsSiderContentProps } from './types';
import './ContestsSiderContent.less'

const ContestsSiderContent: React.FunctionComponent<ContestsSiderContentProps> = ({}) => {
    return (
        <SiderLayoutContent>
            <>
                <ComponentContent className="search-input-component-content">
                    <SearchInput />
                </ComponentContent>
                <ComponentContent className="filter-select-component-content">
                    <FilterSelect />
                </ComponentContent>
                <ComponentContent className="create-button-component-content">
                    <CreateButton />
                </ComponentContent>
            </>
        </SiderLayoutContent>
    );
};

export default ContestsSiderContent;
