import { Ref } from 'react';

export interface SearchWrapperProps {
    name: string;
    rules?: any;
    children: any;
    childRef: Ref<any>;
    onKeyDown: (e: Event) => any;
}
