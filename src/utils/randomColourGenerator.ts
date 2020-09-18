import { getRandomInt } from '@utils';

const colourList = [
    'red',
    'orange',
    // 'yellow',
    'green',
    'blue',
    'indigo',
    'violet',
];

const randomColourGenerator = (): string =>
    colourList[getRandomInt(colourList.length)];

export default randomColourGenerator;
