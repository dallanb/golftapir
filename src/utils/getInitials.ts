const getInitials = (words: string) => {
    const matches = words.match(/\b(\w)/g);
    return matches ? matches.join('') : '';
};

export default getInitials;
