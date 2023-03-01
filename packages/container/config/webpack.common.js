// for common configuration for both dev and prod
module.exports = {
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
            // for functionality like async await in browser
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },
    ],
  },
};
