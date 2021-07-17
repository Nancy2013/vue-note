<!--
 * @Author: your name
 * @Date: 2020-03-04 09:36:25
 * @LastEditTime: 2021-07-17 15:57:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-note\Webpack\plugins.md
 -->

# Plugin

## 常用的 plugin

- html-webpack-plugin 创建 html 文件，并进入 js 文件
- uglifyjs-webpack-plugin 压缩文件
- mini-css-extract-plugin 分离 css 文件，讲 css 文件提取为独立文件，支持按需加载
- clean-webpack-plugin 清理目录
- webpack-bundle-analyzer 可视化输出文件的体积

## 提高效率的 plugin

- webpack-merge 重复代码合并
- HotModuleReplacementPlugin 模块热重载

### html-webpack-plugin

- 用于自动在 output.path 路径下，生成 html 文件。
- 并在文件中插入 script 标签，src 为 output.filename,方便解决编译后哈希命名 bundle 文件的引用问题

```javascript
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpackConfig ={
  ...,
  plugins:[
    new HtmlWebpackPlugin({
      title：'', // 网页名称
      filename：'', // 生成的文件名称
      template:resolve(srcRoot, 'index.html'), // 使用模块的url
      favicon:'', // 网站图标
    }),
  ]
}
```

- 可以通过<%= htmlWebpackPlugin.options.title %>，在静态页面中获得配置参数

### uglifyjs-webpack-plugin

- 压缩 js
- 在 webpack3+版本中配置方式，webpack.optimize.uglifyjsplugin

### webpack-dev-server

- 使用 node 环境下，express 提供的 http 服务器
- 运行 webpack-dev-server 时，编译生成的文件保存在内存，并不是本地，可以提高读取文件的速度
- 在终端运行时默认查找全局插件，配置在 package.json 里时查找本地文件夹插件
- 常用参数

```javascript
module.exports={
   devServer: {
     compress: true, // 使用gzip压缩
     contentBase: path.join(__dirname, 'public'), //加载静态文件的目录，可以配置为数组
     host:'', //主机名，默认为localhost
     hot:true, // 支持热加载
     noInfo:true, // 隐藏webpack bundle之类的信息
     open:true, // 启动后打开浏览器
     openPage:'' // 指定打开的界面
     port:'' , // 端口号
     proxy: [{ // api代理
      context: ['/auth', '/api'], // api的url前缀
      target: 'http://localhost:3000', // 后端ip
      changeOrigin: true
    }],
    publicPath:'', // 可以直接访问的目录
    status: 'errors-only', // 控制显示bundle信息
  }
}
```

### eslint-plugin-vue vs eslint-loader

### [prettier](https://github.com/prettier/eslint-config-prettier)
