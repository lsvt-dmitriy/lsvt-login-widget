const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const safeImportant = require('postcss-safe-important');
const WatchExternalFilesPlugin = require('webpack-watch-files-plugin').default;


module.exports = {
  entry: [ './src/index.ts'],
  devtool: 'inline-source-map',
  devServer: {
    allowedHosts: 'all',
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
    liveReload: true,
    // watchFiles: ['./src/**/*.html', './src/**/*.scss', './src/**/*.ejs', '**/*.ejs'],
    hot: false
  },
  optimization: {
    minimize: false
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
          {
            loader: 'postcss-sass-loader',
            options: {
              plugins: [
                require('postcss-safe-important')({
                  paths: p => p.endsWith('cleanslate.css'),
                  keepcomments: false
                }),
              ]
            }
          }
        ]
      },
      {
        test: /\.woff2?$/,
        type: 'asset/resource',
        generator : {
          filename : 'fonts/[name][ext][query]',
        }
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|webp)$/i,
        type: 'asset/resource'
      },
      { 
        test: /\.ejs$/, 
        use: 'ejs-compiled-loader' 
      }
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.ejs', '.scss', '.css'],
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, './src/index.ejs'),
        filename: 'index.html',
        inject: true,
        minify: false // NOTE: "true" breaks "build" script for some reason
    }),
    new WatchExternalFilesPlugin({
      files: [
        './src/**/*.ejs'
      ],
      verbose: true
    })
  ],
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    clean: true,
  },
};
