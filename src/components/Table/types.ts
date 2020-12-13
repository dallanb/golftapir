import React, { PropsWithChildren } from 'react';
import { ListChildComponentProps } from 'react-window';

export interface TableProps {
    rowRenderer?: any;
    header?: boolean;
    columnsSchema: any;
    items: any;
    style: any;
}

export interface RowRendererProps {
    row: any;
}
