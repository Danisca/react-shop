const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
  entry: '/src/index.js',
  output:{
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: '/'
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx'
    ],
    alias:{
      '@assets': path.resolve(__dirname, 'src/assets/'),
      '@icons': path.resolve(__dirname, 'src/assets/icons/'),
      '@logos': path.resolve(__dirname, 'src/assets/logos/'),

      '@components': path.resolve(__dirname, 'src/components/'),
      '@pages': path.resolve(__dirname, 'src/pages/'),
      '@containers': path.resolve(__dirname, 'src/containers/'),
      '@routes': path.resolve(__dirname, 'src/routes/'),

      '@styles': path.resolve(__dirname, 'src/styles/')
    }
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
      },
      //css and sass loader
      {
        test: /\.(css|scss)$/,
        use:[
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      //images's rule
      {
        test:/\.(png|svg)$/,
        type: 'asset'
      }
    ]
  },
  plugins:[
    new htmlWebpackPlugin({
      template: path.resolve(__dirname,'./public/index.html'),
      filename: 'index.html'
    }),
    new miniCssExtractPlugin({
      filename: '[name].css'
    })
  ],
  devServer:{
    static: {
      directory: path.join(__dirname, 'dist')
    },
    historyApiFallback: true,
    compress: true,
    port: 3000
  }
}