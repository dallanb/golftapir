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

const randomColourGenerator = (keyword?: string): string =>
    colourList[getRandomInt(colourList.length)];

export default memoize(randomColourGenerator);
