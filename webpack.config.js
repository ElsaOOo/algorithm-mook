module.exports = {
  entry: "./src/index.js",
  output: {
    path: __dirname + "/build",
    filename: "build.js",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
