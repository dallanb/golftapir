import { PropsWithChildren } from 'react';
import { ListChildComponentProps } from 'react-window';

export interface NotificationsListTileProps {
    props: PropsWithChildren<ListChildComponentProps>;
    history: any;
}
