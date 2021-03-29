import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MemberResultsList from './MemberResultsList';
import { MemberResultsProps } from './types';
import MemberPageContentMemberResultsActions from './actions';
import { selectData } from './selector';
import { selectIsInitialized } from '@pages/Member/selector';
import ComponentContent, {
    SiderComponentContent,
} from '@layouts/ComponentContent';
import CONSTANTS from '@locale/en-CA';
import './MemberResults.less';
import { set as _set } from 'lodash';
import InvitesList from '@pages/Members/MembersSider/MemberActive/Invites/InvitesList';

const MemberResults: React.FunctionComponent<MemberResultsProps> = ({}) => {
    const dispatch = useDispatch();
    const ref = useRef(null);
    const isDataInitialized = useSelector(selectIsInitialized);
    const [isDataInitializing, setDataIsInitializing] = useState(true);

    useEffect(() => {
        return () => {
            dispatch(MemberPageContentMemberResultsActions.terminate());
        };
    }, []);

    useEffect(() => {
        if (isDataInitialized && isDataInitializing) {
            dispatch(MemberPageContentMemberResultsActions.init());
            setDataIsInitializing(false);
        }
    }, [isDataInitialized]);

    const {
        isInitialized,
        isFetching,
        data = [],
        metadata = [],
        options = undefined,
    } = useSelector(selectData);

    const dataHeight = Math.min(400, data.length * 100);
    const emptyHeight = 124;
    const dimensions = {};
    if (isInitialized) {
        _set(dimensions, ['height'], dataHeight || emptyHeight);
    }

    return (
        <ComponentContent
            componentRef={ref}
            showSpinner={!isInitialized || !isDataInitialized}
            className="member-results space"
            bodyStyle={dimensions}
            title={CONSTANTS.PAGES.MEMBER.TABS.CONTESTS}
        >
            <MemberResultsList
                containerRef={ref}
                containerDimensions={dimensions}
                data={data}
                metadata={metadata}
                options={options}
                isFetching={isFetching}
            />
        </ComponentContent>
    );
};

export default MemberResults;
