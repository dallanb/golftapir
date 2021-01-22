import { getRandomInt } from '@utils';
import memoize from 'memoize-one';

const colourList = [
    'red',
    'orange',
    // 'yellow',
    'green',
    'blue',
    'indigo',
    'violet',
];

const randomColourGenerator = (keyword?: string): string => {
    const index = keyword
        ? (keyword.length * 999) % colourList.length
        : getRandomInt(colourList.length);
    return colourList[index];
};

export default memoize(randomColourGenerator);
