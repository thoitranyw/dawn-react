const path = require("path");

module.exports = {
    entry: {
        "rcomponent-cart-tool-tip": "./src/scripts/cart-tool-tip.js",
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
        ],
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dawn-theme/assets"),
    },
};
