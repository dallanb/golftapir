import React from 'react';
import ComponentContent, {
    SiderComponentContent,
} from '@layouts/ComponentContent';
import SiderLayoutContent from '@layouts/SiderLayout/SiderLayoutContent';
import CreateButton from './CreateButton';
import SearchInput from './SearchInput';
import { LeaguesSiderProps } from './types';
import './LeaguesSider.less';

const LeaguesSider: React.FunctionComponent<LeaguesSiderProps> = ({}) => {
    return (
        <SiderLayoutContent>
            <>
                <SiderComponentContent className="search-input-component-content">
                    <SearchInput />
                </SiderComponentContent>
                <SiderComponentContent className="create-button-component-content">
                    <CreateButton />
                </SiderComponentContent>
            </>
        </SiderLayoutContent>
    );
};

export default LeaguesSider;
