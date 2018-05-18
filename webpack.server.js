const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const config = {
// Inform Webpack that the bundle is for NodeJS and not the browser
// Tell Webpack the root file of our server application
// Tell Webpack where to put the output file that is generated
// Tell Webpack to run Babel on every file it runs
    target: 'node',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    }    
};

module.exports = merge(baseConfig, config);