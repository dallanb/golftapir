import React from 'react';
import Member from './Member';
import MemberCountry from './MemberCountry';

const columnsSchema = [
    {
        Header: 'Country',
        accessor: 'country',
        Cell: ({ value }: any) => <MemberCountry country={value} />,
        className: 'country',
    },
    {
        Header: 'Member',
        accessor: 'display_name',
        Cell: ({ value }: any) => <Member name={value} />,
        className: 'display-name',
    },
    {
        Header: 'Contests',
        accessor: 'stat.event_count',
        Cell: ({ value }: any) => value,
        className: 'event-count',
    },
    {
        Header: 'Wins',
        accessor: 'stat.win_count',
        Cell: ({ value }: any) => value,
        className: 'win-count',
    },
    {
        Header: 'Winnings',
        accessor: 'stat.winning_total',
        Cell: ({ value }: any) => `$ ${value}`,
        className: 'winning-total',
    },
];

export default columnsSchema;
