const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = () => {
    merge(common, {
        mode: 'production',
    })
}

// es5 
// module.exports = merge(common, {
//     mode: 'production',
//     output: {
//         path: path.resolve(__dirname, "dist"),
//         filename: "vendor/vendor.js",
//         chunkFilename: "[id].[hash:8].js",
//     },
//     optimization: {
//         removeAvailableModules: false,
//         removeEmptyChunks: false,
//         splitChunks: false,
//         minimize: true,
//         minimizer: [
//             new CssMinimizerPlugin(),
//             new TerserPlugin({
//                 sourceMap: false,
//                 extractComments: 'all',
//                 terserOptions: {
//                     compress: {
//                         pure_funcs: [
//                             'console.log',
//                             'console.info',
//                             'console.debug',
//                             'console.warn'
//                         ]
//                     }
//                  }
//             })
//         ],
//     },
// });
