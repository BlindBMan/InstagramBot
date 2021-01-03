const path = require('path');
// const nodeExternals = require('webpack-node-externals');

module.exports = {
    mode: "development",
    entry: '/frontend/src/index.js',
    output: {
        // options related to how webpack emits results

        // where compiled files go
        path: path.resolve(__dirname, "frontend/static/frontend/public/"),
        // path: path.resolve(__dirname, "backend/public/"),

        // 127.0.0.1/static/frontend/public/ where files are served from
        publicPath: "/static/frontend/public/",
        filename: 'main.js',  // the same one we import in index.html
    },
    target: 'node',
    // externals: [nodeExternals()],
    module: {
        // configuration regarding modules
        rules: [
            {
                // regex test for js and jsx files
                test: /\.(js|jsx)?$/,
                // don't look in the node_modules/ folder
                exclude: /node_modules/,
                // for matching files, use the babel-loader
                use: {
                    loader: "babel-loader",
                    options: {presets: ["@babel/env"]}
                },
            },

            {
                test: /\.css$/i,
                use: "css-loader"
            },

            {
                test: /\.(png|jpe?g|gif|mp4)$/i,
                use: "file-loader"
            },

            {
                test: /\.svg$/,
                use: 'svg-inline-loader'
            }
        ],
    },
};