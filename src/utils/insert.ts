const insert = (arr: any[], key: any, newVal: any): any[] => {
    const entries = Object.entries(key);
    const [k, v] = entries[0];
    return arr.map((item) => (item[k] === v ? newVal : item));
};

export default insert;
