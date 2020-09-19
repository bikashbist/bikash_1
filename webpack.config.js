var webpack = require('webpack')
var path = require('path');
//const dotenv=require('dotenv').config();


module.exports = {

	//to make debug easy
devtool:'inline-source-map',

entry:{
	'index':'./src/index.js'
},

output:{
	path: path.resolve(__dirname,'dist'),
	filename:'main.js'
},

module :{
	rules: [
				{ 
					//files for use the rules
					test:/\.js$/, //rules applied for all js files
					exclude:/node_modules/,
					use:'babel-loader'

				},
				{
					//to convert css file to js file
					test:/\.css$/,
					//exclude:/node_modules/,
					use:['style-loader','css-loader']
					// right side first css-loader conversts css to combiend array then style loader will work
				},

				{
				       test: /\.(png|svg|jpg|gif)$/,
				       use: [
			         'file-loader',
				       ],
				     },

	]
},

devServer:{
	contentBase: path.join(__dirname,"public/"),
	port:3002,
	historyApiFallback:true,
	publicPath:"http://localhost:3002/dist/"

}

 }