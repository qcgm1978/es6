var webpack = require('webpack')
var path = require('path');
let debug = !process.argv.includes('-p');
module.exports = {
    // entry: {
    //
    //     './separate/resourceMonitor/js/app': __dirname + '/separate/resourceMonitor/js/index.js',
    //     './es6/app': __dirname + '/es6/index.js',
    //
    //
    //
    // },
     entry: ['babel-polyfill', __dirname + '/es6/index.js'],

    resolve: {
        alias: {}
    },
    output: {
        // path: path.resolve(__dirname, 'app'),
        filename: __dirname +'/es6/app.js',
        // publicPath: './app/'
    },
    module: {
        loaders: [
            //{test: require.resolve('jquery'), loader: 'expose?jQuery!expose?$'},
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015', "presets": ["stage-0"]},
            {
                test: /\.s(a|c)ss$/,
                loaders: ["style", "css", "sass"]
            },
            {test: /\.css$/, loader: "style-loader!css-loader"},
            {test: /\.json/, loader: "json-loader"},
            {
                test: /\.(jpe?g|png|gif|svg|eot)$/i,
                loaders: [
                    //'file?hash=sha512&digest=hex&name=[hash].[ext]',
                    //'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}'
                    'url-loader'
                    ]
                }
                ]
            },
            devServer: {
                contentBase: "./",
                colors: true,
                historyApiFallback: true,
                inline: true,
                hot: true
            },
            plugins: debug ? [
        //new webpack.ProvidePlugin({
        //    $: "jquery",
        //    jQuery:'jquery'
        //    //jQuery: "jquery",
        //    //"window.jQuery": "jquery"
        //})
        ] : [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': '"production"'
            }
        }),
        // new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            mangle: true,
            sourcemap: false,
            compress: {
                warnings: false,
            }
        })
        ]
    }
