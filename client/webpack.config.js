const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: path.resolve(__dirname, './src/index.js'),
	output: {
		path: path.resolve(__dirname, './public'),
		filename: 'bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.(tsx|js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
		],
	},
	resolve: {
		extensions: ['*', '.ts', '.tsx', '.js', '.jsx'],
	},
	devServer: {
		contentBase: path.resolve(__dirname, './public'),
		inline: true,
		host: '10.4.17.37',
		port: 8001,
		disableHostCheck: true,
		hot: true,
	},
	plugins: [new webpack.HotModuleReplacementPlugin()],
};
