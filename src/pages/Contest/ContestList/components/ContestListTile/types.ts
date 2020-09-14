import { PropsWithChildren } from 'react';
import { ListChildComponentProps } from 'react-window';

export interface ContestListTileProps {
    (
        rowData: PropsWithChildren<ListChildComponentProps>,
        history: any
    ): JSX.Element;
}
