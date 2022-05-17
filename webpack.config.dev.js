const path = require('path');

module.exports = {
  entry: './src/index.js',
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
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use:{
          loader: 'babel-loader'
        }
      }
    ]
  },
  devServer:{
    static: {
      directory: path.join(__dirname, 'dist')
    },
    compress: true,
    port: 3000
  }
}