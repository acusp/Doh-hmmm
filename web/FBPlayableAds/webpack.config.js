const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const staticResolve = file => path.join(__dirname, './', file)

const isProduction = true;

const config = {
  mode: 'production',
  entry: [staticResolve('main.js'), staticResolve('start.js')],
  output: {
    path: staticResolve("dist"), // 打包文件的输出目录
    filename: "main.bundle.js"
  },
  optimization: {
    minimize: true,
    minimizer: [
      // This is only used in production mode
      new TerserPlugin({
        terserOptions: {
          parse: {
            // We want terser to parse ecma 8 code. However, we don't want it
            // to apply any minification steps that turns valid ecma 5 code
            // into invalid ecma 5 code. This is why the 'compress' and 'output'
            // sections only apply transformations that are ecma 5 safe
            // https://github.com/facebook/create-react-app/pull/4234
            ecma: 8,
          },
          compress: {
            ecma: 5,
            warnings: false,
            // Disabled because of an issue with Uglify breaking seemingly valid code:
            // https://github.com/facebook/create-react-app/issues/2376
            // Pending further investigation:
            // https://github.com/mishoo/UglifyJS2/issues/2011
            comparisons: false,
            // Disabled because of an issue with Terser breaking valid code:
            // https://github.com/facebook/create-react-app/issues/5250
            // Pending further investigation:
            // https://github.com/terser-js/terser/issues/120
            inline: 2,
          },
          mangle: {
            safari10: true,
          },
          output: {
            ecma: 5,
            comments: false,
            // Turned on because emoji and regex is not minified properly using default
            // https://github.com/facebook/create-react-app/issues/2488
            ascii_only: true,
          },
        },
        sourceMap: isProduction ? false : true,
      })
    ],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'static'),
        options: { // 配置es6
          presets: ['@babel/preset-env']
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        // loader: 'url-loader?name=images/[name].[ext]',
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 2 * 1024 * 1024,
              name: 'imgs/[name].[ext]'
            }
          },
          'image-webpack-loader'
        ],

      },
      {
        test: /\.(mp3)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          name: 'audios/[name].[ext]',
          limit: 2 * 1024 * 1024
        }
      }
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      dry: false,
      verbose: true
    }),
    // new HtmlWebpackPlugin({
    //   template: 'index.html'
    // })
  ]
};

module.exports = config;
