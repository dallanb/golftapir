import { ReactNode } from 'react';

export interface ContentLayoutProps {
    header?: ReactNode;
    content?: ReactNode;
    sider?: ReactNode;
    showSpinner?: boolean;
    className?: string;
}
