import React from 'react';
import Member from './Member';
import MemberCountry from './MemberCountry';
import CONSTANTS from '@locale/en-CA';

const TABLE = CONSTANTS.PAGES.LEAGUE_HOME.STANDINGS.TABLE;

const columnsSchema = [
    {
        Header: TABLE.COUNTRY,
        accessor: 'country',
        Cell: ({ value }: any) => <MemberCountry country={value} />,
        className: 'country',
    },
    {
        Header: TABLE.MEMBER,
        id: 'member',
        accessor: 'uuid',
        Cell: ({ value }: any) => <Member uuid={value} />,
        className: 'display-name',
    },
    {
        Header: TABLE.EVENTS,
        accessor: 'stat.event_count',
        Cell: ({ value }: any) => value,
        className: 'event-count',
    },
    {
        Header: TABLE.WINS,
        accessor: 'stat.win_count',
        Cell: ({ value }: any) => value,
        className: 'win-count',
    },
    {
        Header: TABLE.WINNINGS,
        accessor: 'stat.winning_total',
        Cell: ({ value }: any) => `$${value}`,
        className: 'winning-total',
    },
];

export default columnsSchema;
