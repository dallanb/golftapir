import React, { useContext, useEffect, useState } from 'react';
import { get as _get } from 'lodash';
import { ResizeContext } from '@contexts';

let timer: ReturnType<typeof setTimeout>;
const useList: any = ({ delay } = { delay: 250 }) => {
    const dimensions = useContext(ResizeContext);
    const [isResizing, setIsResizing] = useState(false);
    const height = _get(dimensions, ['height']);
    useEffect(() => {
        setIsResizing(true);
        clearTimeout(timer);
        timer = setTimeout(() => {
            setIsResizing(false);
        }, delay);
    }, [height]);

    return { isResizing };
};

export default useList;
