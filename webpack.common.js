const path = require("path");
const glob = require("glob");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {
    CleanWebpackPlugin
} = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const globImporter = require("node-sass-glob-importer");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');


const generateHtmlPlugins = () =>
    glob.sync("./src/views/pages/*.twig").map(
        (dir) =>
            new HtmlWebpackPlugin({
                filename: path.basename(dir).replace(".twig", ".html"), // Output
                template: dir, // Input
                title: "Custom template using Handlebars",
                chunks: true,
            })
    );

module.exports = {
    mode: "development",
    devServer: {},
    entry: {
        styles: "./src/scss/styles.scss",
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "vendor/vendor.js",
        chunkFilename: "[id].[hash:8].js",
    },
    module: {
        rules: [{
            test: /\.twig$/,
            use: [
                "raw-loader",
                {
                    loader: "twig-html-loader",
                    options: {
                        data: {},
                    },
                },
            ],
        },
        {
            test: /\.(scss|css)$/,
            use: [
                {
                    loader: MiniCssExtractPlugin.loader
                },
                {
                    loader: "css-loader",
                    options: {},
                },
                {
                    loader: "sass-loader",
                    options: {
                        sassOptions: {
                            importer: globImporter(),
                        },
                    },
                },
            ],
        },
        {
            test: /\.(woff|woff2|ttf|otf|eot|svg)?$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        limit: false,
                        name: '[name].[ext]',
                        outputPath: '../assets/fonts/'
                    }
                }
            ]
        },

        {
            test: /\.(png|jpg|gif)$/,
            use: [{
                loader: "url-loader",
                options: {
                    limit: false,
                    name: "../assets/images/[name].[ext]",
                },
            },],
        },
        ],
    },
    plugins: [
        // new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "./css/[name].css",
        }),
        new CopyPlugin({
            patterns: [{
                from: "src/assets/libs",
                to: "assets/libs"
            },
            {
                from: "src/assets/images",
                to: "assets/images"
            },
            {
                from: "src/assets/fonts",
                to: "assets/fonts"
            },
            {
                from: "src/js",
                to: "js"
            },
            ],
        }),
        ...generateHtmlPlugins(),
    ],
    // optimization: {
    //     minimize: true,
    //     minimizer: [
    //         new CssMinimizerPlugin(),
    //     ],
    // },
    // .concat(htmlPlugins),
};