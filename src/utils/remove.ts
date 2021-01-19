const remove = (arr: any[], key: any): any[] => {
    const entries = Object.entries(key);
    const [k, v] = entries[0];
    return arr.filter((item) => item[k] !== v);
};

export default remove;
