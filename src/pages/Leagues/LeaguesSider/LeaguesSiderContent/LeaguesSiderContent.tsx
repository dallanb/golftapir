import React from 'react';
import ComponentContent from '@layouts/ComponentContent';
import SiderLayoutContent from '@layouts/SiderLayout/SiderLayoutContent';
import CreateButton from './CreateButton';
import SearchInput from './SearchInput';
import { LeaguesSiderContentProps } from './types';
import './LeaguesSiderContent.less';

const LeaguesSiderContent: React.FunctionComponent<LeaguesSiderContentProps> = ({}) => {
    return (
        <SiderLayoutContent>
            <>
                <ComponentContent className="search-input-component-content">
                    <SearchInput />
                </ComponentContent>
                <ComponentContent className="create-button-component-content">
                    <CreateButton />
                </ComponentContent>
            </>
        </SiderLayoutContent>
    );
};

export default LeaguesSiderContent;
