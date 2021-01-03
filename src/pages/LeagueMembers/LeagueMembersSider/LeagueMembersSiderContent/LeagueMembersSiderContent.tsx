import React from 'react';
import SiderLayoutContent from '@layouts/SiderLayout/SiderLayoutContent';
import { LeagueMembersSiderContentProps } from './types';
import ComponentContent from '@layouts/ComponentContent';
import SearchSelectInput from './SearchSelectInput';

const LeagueMembersSiderContent: React.FunctionComponent<LeagueMembersSiderContentProps> = ({}) => {
    return (
        <SiderLayoutContent>
            <>
                <ComponentContent className="search-input-component-content">
                    <SearchSelectInput />
                </ComponentContent>
            </>
        </SiderLayoutContent>
    );
};

export default LeagueMembersSiderContent;
