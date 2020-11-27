import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ContestForm from './ContestForm';
import { ContestProps } from './types';
import ContestsCreatePageContentContestActions from './actions';
import { selectData } from './selector';
import ComponentContent from '@layouts/ComponentContent';
import './Contest.scss';
import { get as _get } from 'lodash';
import constants from '@constants';

const Contest: React.FunctionComponent<ContestProps> = ({}) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const options = _get(history, ['location', 'state'], null);

    const { isSubmitting, uuid } = useSelector(selectData);

    useEffect(() => {
        if (!isSubmitting && uuid) {
            history.push(`/app${constants.ROUTES.CONTEST}`, {
                uuid,
            });
        }
    });

    useEffect(() => {
        dispatch(ContestsCreatePageContentContestActions.init(options));
        return () => {
            dispatch(ContestsCreatePageContentContestActions.terminate());
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
