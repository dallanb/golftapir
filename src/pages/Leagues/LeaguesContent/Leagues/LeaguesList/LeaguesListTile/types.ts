import { PropsWithChildren } from 'react';
import { ListChildComponentProps } from 'react-window';

export interface LeaguesListTileProps {
    props: PropsWithChildren<ListChildComponentProps>;
    history: any;
}
