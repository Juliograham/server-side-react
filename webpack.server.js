const path = require('path');

module.exports = {
// Inform Webpack that the bundle is for NodeJS and not the browser
// Tell Webpack the root file of our server application
// Tell Webpack where to put the output file that is generated
// Tell Webpack to run Babel on every file it runs
    target: 'node',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        'react',
                        'stage-0',
                        ['env', { targets: { browsers: ['last 2 versions'] } }]
                    ]
                }
    
    }]
  }
}