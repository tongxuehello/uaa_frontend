const path = require('path');
var webpack = require('webpack');
var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
	entry : {
		client : './src/client.js'
	},
	output : {
		path : __dirname + "/build/js/",
		filename : '[name].js'
	},
	resolve : {
		extensions : ['', '.js', '.jsx']
	},
	module : {
		loaders : [
			{
				test : /\.js$/,
				loader : 'babel',
				exclude : /node_modules/,
				query : {
					cacheDirectory: true,
					presets : ['es2015', 'react', 'stage-0'],
					plugins : [
						["transform-decorators-legacy"]
					]
				},
			},
			{
				test : /\.less$/,
				include : [path.join(__dirname, 'css')],
				loader : 'style-loader!css-loader!less-loader'
			}, 
			{
				test : /\.scss$/,
				loader : 'style-loader!css-loader!sass-loader'
			}, {
				test : /\.(css)$/,
				include : [path.join(__dirname, 'css')],
				loader : 'style-loader!css-loader'
			}, {
				test : /\.(png|jpg)$/,
				loader : 'url-loader?limit=8192'
			}
		]
	},
	plugins : [commonsPlugin]
};
