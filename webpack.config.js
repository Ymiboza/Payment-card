const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/main.js", // Путь к вашему JavaScript-файлу
  output: {
    filename: "main[contenthash].js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.html$/,
        use: "html-loader",
      },
      {
        test: /\.svg$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "src/assets/image/", // Каталог, куда будут скопированы файлы SVG
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      //? Путь к вашему файлу HTML
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: "src/assets/image", to: "image" }],
    }),
  ],
  devtool: "source-map",
  mode: "development", // Устанавливаем режим разработки
};
