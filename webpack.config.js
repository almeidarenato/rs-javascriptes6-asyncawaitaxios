module.exports = {
  entry: [
    "@babel/polyfill",
    "./src/main.js",
    "./src/teste2.js",
    "./src/challenge1.js",
    "./src/challenge2.js",
    "./src/challenge3.js",
    "./src/challenge4.js"
  ],
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: __dirname + "/public"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
