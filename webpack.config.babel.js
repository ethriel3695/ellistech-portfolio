import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash';
import dotenvWebpack from 'dotenv-webpack';

const LAUNCH_COMMAND = process.env.npm_lifecycle_event;

const isProduction = LAUNCH_COMMAND === 'production';
process.env.BABEL_ENV = LAUNCH_COMMAND;

const PATHS = {
  app: path.resolve(__dirname, 'src/index'),
  build: path.join(__dirname, 'dist')
};

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: 'src/index.html',
  filename: 'index.html',
  inject: 'body'
});

const productionPlugin = new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('production')
  }
});

const base = {
  entry: [
    'babel-polyfill',
    PATHS.app
  ],
  target: 'web',
  output: {
    path: PATHS.build,
    publicPath: '/',
    filename: '[name].[hash].js'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            query: {
              modules: true,
              localIdentName: '[path]___[name]__[local]___[hash:base64:5]'
            }
          }]
      },
      { test: /\.(jpe?g|png|gif|svg|webp)$/i,
        use: [
            {
                loader: 'file-loader',
                options: {
                    name: 'assets/img[name].[ext]'
                }
            },
            {
                loader: 'image-webpack-loader',
                options: {
                    query: {
                        mozjpeg: {
                            progressive: true,
                            quality: 65
                        },
                        gifsicle: {
                            optimizationLevel: 7,
                            interlaced: false
                        },
                        optipng: {
                            optimizationLevel: 7,
                            interlaced: false
                        },
                        webp: {
                            progressive: true,
                            quality: 65
                        }
                    }
                }
          }
      ]
    }]
  },
  resolve: {
    modules: [path.resolve(__dirname, './src'), 'node_modules']
  }
};

const developmentConfig = {
  devtool: 'cheap-module-inline-source-map',
  devServer: {
    contentBase: './src',
    hot: true,
    inline: true,
    historyApiFallback: true
  },
  plugins: [
    HTMLWebpackPluginConfig,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new dotenvWebpack()
  ]
};

var productionConfig = {
  devtool: 'cheap-module-source-map',
  plugins: [productionPlugin,
    new WebpackMd5Hash(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new dotenvWebpack()
  ]
};

export default Object.assign({}, base,
  isProduction === true ? productionConfig : developmentConfig
);
