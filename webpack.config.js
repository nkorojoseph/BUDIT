//you must have entry-> output, __dirname
const path = require('path')
module.exports = {
    entry:'./src/playground/reducer-exp.js',
    output:{
        //create the path to the local file we are working in
        path: path.join(__dirname,'public'),
        filename:'bundle.js'
    },
    module:{
        rules: [{
            loader:'babel-loader',
            test:/\.js$/,
            exclude:/node_modules/
        },{
            test:/\.s?css$/,
            use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ]
        }]
    },
    devtool:'cheap-module-eval-source-map',
    devServer:{
        historyApiFallback: true,
        contentBase:path.join(__dirname,'public')
    }
}