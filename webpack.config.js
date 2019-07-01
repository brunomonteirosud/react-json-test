const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

const htmlPlugin = new HtmlWebPackPlugin({
	template: "./src/index.html",
	filename: "./index.html"
});

module.exports = {
	entry: './src/index.tsx',
	resolve: {
		extensions: ['.js', '.json', '.ts', '.tsx'],
	},
	output: {
		path: path.join(__dirname, '/dist'),
		filename: 'bundle.min.js'
	},
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				loader: "babel-loader"
			},
			{
				test   : /\.(ttf|eot|png|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
				loader : 'file-loader'
			}
		]
	},
	plugins: [htmlPlugin]
};