import { PropsWithChildren } from 'react';
import { ListChildComponentProps } from 'react-window';

export interface ContestListTileProps {
    (
        rowData: PropsWithChildren<ListChildComponentProps>,
        items: any,
        history: any
    ): JSX.Element;
}
