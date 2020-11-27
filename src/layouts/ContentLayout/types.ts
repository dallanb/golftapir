import { ReactNode } from 'react';

export interface ContentLayoutProps {
    header?: ReactNode;
    content?: ReactNode;
    sider?: ReactNode;
    className?: string;
}
