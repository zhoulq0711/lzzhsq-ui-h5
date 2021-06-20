const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');
module.exports = {
    /* 部署应用包的基本URL */
    /* baseUrl 从 Vue CLI 3.3 起已弃用 ，请使用publicPath */
    //  baseUrl: process.env.NODE_ENV === "production" ? "./" : "./",
    publicPath: process.env.NODE_ENV === "production" ? "./" : "./",
    /* 生产环境构建文件的目录 defalut: dist */
    outputDir: "dist",
    /* 放置生成的静态文件目录（js css img） */
    assetsDir: "static",
    /* 指定生成的index.html 输出路径 相对 default: index.html */
    indexPath: "index.html",
    /* 指定生成文件名中包含hash default: true */
    filenameHashing: true,
    /* 是否保存时 lint 代码 */
    lintOnSave: process.env.NODE_ENV === "production",
    /* 是否使用编译器 default: false */
    runtimeCompiler: false,
    /* 默认babel-loader会忽略node_modules中的文件，你想显示的话在这个选项中列出来 */
    // transpileDependencies: [],
    /* 生产环境的source map */
    // 禁止console
    // drop_console: true,
    // 禁止debug语句
    // drop_debugger: true,
    productionSourceMap: true,
    // crossorigin: "",
    integrity: false,
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'components': '@/components',
                'views': '@/views',
            }
        }
    },
    // css相关配置
    // css: {
    //     loaderOptions: {
    //     postcss: {
    //         plugins: [
    //         autoprefixer(),
    //         pxtorem({
    //             rootValue: 37.5,
    //             propList: ['*']
    //         })
    //         ]
    //     }
    //     }
    // },
    devServer: {
        port: 8888,
        https: false,
        // 自动启动浏览器
        open: true,
        proxy: {

        '/lzzhsq/': {
            target: 'http://localhost:2011',
            ws: false,
            pathRewrite: {
            '^/lzzhsq/': '/'
            }
        },
            "/": {
                //代理路径 例如 https://baidu.com
                target: "http://192.168.17.228:9999",
                // 将主机标头的原点更改为目标URL
                changeOrigin: true,
                ws: false,
                pathRewrite: {
                    "^/": "/"
                }
            }
        }
    }
}
