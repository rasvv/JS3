const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
	entry: resolve(__dirname, 'src', 'main.js'),
	output: {
		path: resolve(__dirname, 'build'),
		filename: 'main.[contenthash].js'
	},
	plugins: [
		// new BundleAnalyzerPlugin(),
		new HtmlWebpackPlugin({
			template: resolve(__dirname, 'index.html')
		})
	],
	module: {
		rules: [
			{
				test: /\.(png|jpe?g|gif|mp3)$/i,
				use: [
					{
					loader: 'file-loader',
					options: {
						name: '[path][name].[ext]',
						}						
					}
				]		
			},
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader'],
			},
			{
				test: /\.s[ac]ss$/,
				// use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
				use: ['style-loader', 'css-loader', 'sass-loader'],
			}

		]
	}
};