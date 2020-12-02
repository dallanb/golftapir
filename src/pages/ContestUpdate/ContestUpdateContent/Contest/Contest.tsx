import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ContestForm from './ContestForm';
import { ContestProps } from './types';
import ContestUpdatePageContentContestActions from './actions';
import { selectData } from './selector';
import ComponentContent from '@layouts/ComponentContent';
import './Contest.scss';
import constants from '@constants';

const Contest: React.FunctionComponent<ContestProps> = ({}) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const { isSubmitted, uuid } = useSelector(selectData);

    useEffect(() => {
        if (isSubmitted && uuid) {
            history.push(`/app${constants.ROUTES.CONTEST.ROUTE}`, {
                uuid,
            });
        }
    });

    useEffect(() => {
        dispatch(ContestUpdatePageContentContestActions.init());
        return () => {
            dispatch(ContestUpdatePageContentContestActions.terminate());
        };
    }, []);

    const { isInitialized } = useSelector(selectData);

    return (
        <ComponentContent showSpinner={!isInitialized} className="contest">
            <ContestForm />
        </ComponentContent>
    );
};

export default Contest;
