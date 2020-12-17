import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { get as _get } from 'lodash';
import ContestForm from './ContestForm';
import { ContestProps } from './types';
import ContestsCreatePageContentContestActions from './actions';
import { selectData } from './selector';
import ComponentContent from '@layouts/ComponentContent';
import routes from '@constants/routes';
import { OverlaySpin } from '@components';
import './Contest.less';

const Contest: React.FunctionComponent<ContestProps> = ({}) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const options = _get(history, ['location', 'state'], undefined);

    const { isSubmitted, isSubmitting, result } = useSelector(selectData);

    useEffect(() => {
        if (isSubmitted && result) {
            history.push(`/app${routes.CONTEST.ROUTE}`, result);
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
            <OverlaySpin visible={isSubmitting} />
        </ComponentContent>
    );
};

export default Contest;
