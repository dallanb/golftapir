import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContestsList from './ContestsList';
import { ContestsProps } from './types';
import ContestsPageContentContestsActions from './actions';
import { selectData } from './selector';
import ComponentContent from '@layouts/ComponentContent';
import { selectMyLeagueUUID } from '@selectors/BaseSelector';
import CONSTANTS from '@locale/en-CA';
import { useList } from '@hooks';
import './Contests.less';

const Contests: React.FunctionComponent<ContestsProps> = ({}) => {
    const dispatch = useDispatch();
    const ref = useRef(null);
    const leagueUUID = useSelector(selectMyLeagueUUID);
    const { isResizing } = useList();

    useEffect(() => {
        dispatch(
            ContestsPageContentContestsActions.init({ league_uuid: leagueUUID })
        );
        return () => {
            dispatch(ContestsPageContentContestsActions.terminate());
        };
    }, []);

    const {
        isInitialized,
        isFetching,
        data = [],
        metadata = [],
        options = undefined,
    } = useSelector(selectData);

    return (
        <ComponentContent
            componentRef={ref}
            showSpinner={!isInitialized || isResizing}
            className="contests"
            title={CONSTANTS.PAGES.CONTESTS.LIST.TITLE}
        >
            <ContestsList
                containerRef={ref}
                data={data}
                metadata={metadata}
                options={options}
                isFetching={isFetching}
            />
        </ComponentContent>
    );
};

export default Contests;
