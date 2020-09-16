import { PropsWithChildren } from 'react';
import { ListChildComponentProps } from 'react-window';

export interface ContestsListTileProps {
    (
        rowData: PropsWithChildren<ListChildComponentProps>,
        history: any
    ): JSX.Element;
}
