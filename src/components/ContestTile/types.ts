import { PropsWithChildren } from 'react';
import { ListChildComponentProps } from 'react-window';

export interface ContestTileProps {
    props: PropsWithChildren<ListChildComponentProps>;
    history: any;
    params: any;
}
