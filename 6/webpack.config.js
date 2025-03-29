var path = require("path");

module.exports = {
    watch: true,
    entry: "./src/index_checkbox.js",
    output: {
        path: path.join(__dirname, "dist", "assets"),
        filename: "bundle.js"
    },
    module: {
        // rules フィールドは配列で、使用するモジュールの設定値を記述する
        rules: [
            {
                // test に一致するものが対象となる, ここでは拡張子 js を持つファイルすべてを対象とするよう指定している
                test: /\.js$/,
                // exclude には除外する対象を正規表現で指定する
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    // トップレベルにプロパティを追加
    devtool: "source-map"
};