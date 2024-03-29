import React, { useContext, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { get as _get, set as _set } from 'lodash';
import MemberResultsList from './MemberResultsList';
import { MemberResultsProps } from './types';
import MemberPageContentMemberResultsActions from './actions';
import { selectData } from './selector';
import { selectIsInitialized } from '@pages/Member/selector';
import ComponentContent from '@layouts/ComponentContent';
import CONSTANTS from '@locale/en-CA';
import { useList } from '@hooks';
import './MemberResults.less';
import { ResizeContext } from '@contexts';

const MemberResults: React.FunctionComponent<MemberResultsProps> = ({}) => {
    const dispatch = useDispatch();
    const ref = useRef(null);
    const isDataInitialized = useSelector(selectIsInitialized);
    const [isDataInitializing, setDataIsInitializing] = useState(true);
    const windowDimensions = useContext(ResizeContext);
    const height = _get(windowDimensions, ['height']);

    const { isResizing } = useList();

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

    const emptyHeight = 124;
    const dimensions = {};
    if (isInitialized) {
        if (!data.length) {
            _set(dimensions, ['height'], emptyHeight);
        } else if (height < 576) {
            _set(dimensions, ['height'], 200);
        }
    }

    return (
        <ComponentContent
            componentRef={ref}
            showSpinner={!isInitialized || !isDataInitialized || isResizing}
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
