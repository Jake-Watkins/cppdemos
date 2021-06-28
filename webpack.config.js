const path = require('path');


module.exports = {
    devtool: 'source-map',
    entry: {
        index:"./index.tsx",
        Demo1:"./Demo1.tsx"
        },
    mode: "development",
    output: {
        filename: "[id].bundle.js",
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.Webpack.js', '.web.js', '.ts', '.js', '.jsx', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.tsx$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'ts-loader'
                }
            }
        ]
    }
}