//you must have entry-> output, __dirname
const path = require('path')

module.exports = (env) => {
    const isProduction = env === 'production';

    return {
        entry:'./src/app.js',
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
    devtool:isProduction?'source-map':'cheap-module-eval-source-map',
    devServer:{
        historyApiFallback: true,
        contentBase:path.join(__dirname,'public')
    }
    }
}


