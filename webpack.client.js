const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const config = {

// Tell Webpack the root file of our server application
// Tell Webpack where to put the output file that is generated
// Tell Webpack to run Babel on every file it runs

    entry: './src/client/client.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    }
};

module.exports = merge(baseConfig, config);