const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: '/src/index.js',
  output:{
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx'
    ]
  },
  mode: 'development',
  module: {
    rules:[
      //babel's rule
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use:{
          loader: 'babel-loader'
        }
      },
      //html lodaer's rule
      {
        test: /\.html$/,
        use:{
          loader: 'html-loader'
        }
      }
    ]
  },
  plugins:[
    new htmlWebpackPlugin({
      template: path.resolve(__dirname,'./public/index.html'),
      filename: 'index.html'
    }),
  ],
  devServer:{
    static: {
      directory: path.join(__dirname, 'dist')
    },
    compress: true,
    port: 3000
  }
}