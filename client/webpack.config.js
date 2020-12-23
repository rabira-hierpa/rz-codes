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
		extensions: ['*', '.tsx', '.js', '.jsx'],
	},
	devServer: {
		contentBase: path.resolve(__dirname, './public'),
		inline: true,
		port: 8001,
		hot: true,
	},
	plugins: [new webpack.HotModuleReplacementPlugin()],
};
