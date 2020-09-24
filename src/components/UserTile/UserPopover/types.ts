import { ReactNode } from 'react';

export interface UserPopoverProps {
    title: string | JSX.Element | (() => JSX.Element);
    content: string | JSX.Element | (() => JSX.Element);
    trigger: string;
    children: JSX.Element;
}
