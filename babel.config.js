const presets = [
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/preset-typescript',
];
const plugins = [
    '@babel/proposal-class-properties',
    '@babel/proposal-object-rest-spread',
    '@babel/plugin-transform-runtime',
    ['import', {libraryName: 'antd', libraryDirectory: 'lib'}, 'antd'],
];

if (process.env.NODE_ENV === 'production') {
    plugins.push(['transform-remove-console']);
}

module.exports = {
    presets,
    plugins,
};
