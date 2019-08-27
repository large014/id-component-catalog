const path = require('path')
const rootPath = path.resolve(__dirname, '../src')

module.exports = async ({ config, mode }) => {
    config.resolve.alias['@'] = rootPath
    config.resolve.alias['~'] = rootPath

    // config.module.rules.push({
    //     test: /\.vue$/,
    //     loader: 'storybook-addon-vue-info/loader',
    //     enforce: 'post'
    // })

    config.module.rules.push({
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        include: path.resolve(__dirname, '../'),
    });

    // config.module.rules.push({
    //     test: /\.(svg|ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/,
    //     // loader: 'file-loader',
    //     use: ['file-loader'],
    //     query: { name: 'static/media/[name].[hash:8].[ext]' },
    // });

    // config.module.rules.push({
    //     test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
    //     use: ['url-loader'],
    //     include: path.resolve(__dirname, '../'),
    // });
    return config;
};
// module.exports = {
//     module: {
//         rules: [
//             {
//                 test: /\.styl$/,
//                 loaders: ["style-loader", "css-loader", "stylus-loader", {
//                     loader: 'vuetify-loader',
//                     options: {
//                         theme: path.resolve(__dirname, '../src/stylus/')
//                     }
//                 }],
//                 include: path.resolve(__dirname, '../src')
//             }
//         ]
//     },
//     resolve: {
//         extensions: ['.js', '.vue', '.json'],
//         alias: {
//             vue: 'vue/dist/vue.esm.js',
//             '@': path.resolve(__dirname, '../src/')
//         }
//     }
// }