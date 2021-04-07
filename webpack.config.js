const path = require("path");

module.exports = {
  entry: "./src/index.tsx",
  mode: "development",
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "[name].js",
    sourceMapFilename: "[file].map[query]"
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 3000,
    watchContentBase: true,
    hot: true,
    historyApiFallback: true
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        loader: "ts-loader",
        exclude: /(node_modules|bower_components)/,
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true
            }
          }
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};