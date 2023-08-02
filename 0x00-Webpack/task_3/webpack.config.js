const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
		header: {
			import: './modules/header/header.js',
			dependOn: 'shared',
		},
		body: {
			import: './modules/body/body.js',
			dependOn: 'shared',
		},
		footer: {
			import: './modules/footer/footer.js',
			dependOn: 'shared',
		},
		shared: 'jquery',
	},
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].bundle.js'
  },
  plugins: [
		new HtmlWebpackPlugin({
			filename: './index.html',
		}),
		new CleanWebpackPlugin(),
		],
  mode: 'development',
  performance: {
    maxAssetSize: 1000000,
  },
  optimization: {
		splitChunks: {
			chunks: 'all',
		},
	},
  devtool: 'inline-source-map',
  devServer: {
    static: path.join(__dirname,'./public'),
    open: true,
    port: 8564,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['css-loader', 'style-loader'],
      },
      {
        test: /\.(jpe?g|jpg|gif|svg)$/i,
        type: 'asset/resource',
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
              disable: true,
            },
          },
        ],
      },
    ],
  },
};