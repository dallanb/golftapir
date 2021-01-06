import { PropsWithChildren } from 'react';
import { ListChildComponentProps } from 'react-window';

export interface MembersListTileProps {
    props: PropsWithChildren<ListChildComponentProps>;
    history: any;
    params: any;
}
