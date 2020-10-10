import { PropsWithChildren } from 'react';
import { ListChildComponentProps } from 'react-window';

export interface WagersListTileProps {
    props: PropsWithChildren<ListChildComponentProps>;
    history: any;
}
