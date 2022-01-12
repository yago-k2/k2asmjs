// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");

const isProduction = false;//process.env.NODE_ENV == "production";

const stylesHandler = "style-loader";

const TerserPlugin = require("terser-webpack-plugin")

const config = {
  entry: "./src/index.mjs",
  output: {
    path: path.resolve(__dirname, "dist"),
  },
//  node: { fs: "empty" },
//  target: "node",
  target: ["web","es2020"],
//  target: "browserslist:modern",
//  type: "module",
  plugins: [
    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        loader: "babel-loader",
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, "css-loader"],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },
      {
        test: /\.txt$/i,
        type: "raw-loader"
      }
      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
  optimization: {
    minimize: true,
//    usedExports: true,
    minimizer: [new TerserPlugin({
	minify: TerserPlugin.esbuildMinify,
	terserOptions: {
//	  minifyOptions: {removeComments: true},
          legalComments: "none",
          module: true,
        }
	//terserOptions: {format: {comments:false}}
  })]
  }
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
  } else {
    config.mode = "development";
  }
  return config;
};
