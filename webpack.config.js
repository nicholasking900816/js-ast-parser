const SplitChunksPlugin = require('webpack').optimize.SplitChunksPlugin;


module.exports = {
    entry: './src/javascriptAstParser.ts',
    mode: 'development',
    devtool: false,
    module: {
        rules:[
            {
                test: /\.ts$/,
                use:['ts-loader']
            }
        ]
    },
    plugins:[new SplitChunksPlugin()],
    resolve: {
        extensions: ['.js', '.ts']
    }
}