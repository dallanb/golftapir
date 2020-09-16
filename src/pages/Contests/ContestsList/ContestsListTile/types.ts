import { PropsWithChildren } from 'react';
import { ListChildComponentProps } from 'react-window';

export interface ContestsListTileProps {
    props: PropsWithChildren<ListChildComponentProps>;
    history: any;
}
