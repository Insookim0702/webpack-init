const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
  mode: "development", //개발용이나 프로덕션용이냐
  entry: {
    main: "./src/app.js", //하나로 묶기 시작할 파일
  },
  output: {
    //여러개의 모듈을 하나로 만들어서 저장시킬 위치를 설정
    path: path.resolve("./dist"), //저장 경로
    filename: "[name].js", //웹팩 결과물 파일 이름
  },
  module: {
    //css-loader를 설정합니다.
    rules: [
      {
        test: /\.css$/, //css에 대한 정규식을 입력합니다.
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]?[hash]",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new CleanWebpackPlugin(),
  ],
};
