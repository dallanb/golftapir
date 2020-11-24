import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PendingParticipantsTableProps } from './types';
import { selectContestParticipants } from '@pages/Contest/selector';
import './PendingParticipantsTable.scss';

const PendingParticipantsTable: React.FunctionComponent<PendingParticipantsTableProps> = () => {
    const items = useSelector(selectContestParticipants);
    console.log(items);
    // bless a state and on mount here
    // I will likely have a bug with my new approach cause i do not think i am accounting for a user who is not a participant

    return <div />;
};

export default PendingParticipantsTable;
