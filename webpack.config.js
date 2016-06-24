const path = require('path');
var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
	entry : {
		client : './src/client.js'
	},
	output : {
		path : path.resolve(__dirname, "build"),
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
				include : [path.join(__dirname, 'src')],
				exclude : /node_modules/,
				loader : 'style!css!less'
			}, 
			{
				test : /\.scss$/,
				include : [path.join(__dirname, 'src')],
				exclude : /node_modules/,
				loader : 'style!css?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]!autoprefixer?browsers=last 2 version!sass?outputStyle=expanded&sourceMap'
			}, {
				test : /\.(css)$/,
				include : [path.join(__dirname, 'src')],
				exclude : /node_modules/,
				loader : 'style!css'
			}, {
				test : /\.(png|jpg)$/,
				exclude : /node_modules/,
				loader : 'url-loader?limit=8192'
			}
		]
	},
	plugins : [commonsPlugin]
};
