<!--
 * @Author: your name
 * @Date: 2020-03-04 09:36:25
 * @LastEditTime: 2020-03-04 15:26:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-note\Webpack\plugins.md
 -->
## Plugin

## 常用插件

#### html-webpack-plugin
- 用于自动在output.path路径下，生成html文件。
- 并在文件中插入script标签，src为output.filename,方便解决编译后哈希命名bundle文件的引用问题
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


#### uglifyjs-webpack-plugin
- 压缩js
- 在webpack3+版本中配置方式，webpack.optimize.uglifyjsplugin

#### webpack-dev-server
- 使用node搭建本地服务器
- 在终端运行时默认查找全局插件，配置在package.json里时查找本地文件夹插件
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
    stats: 'errors-only', // 控制显示bundle信息
  }
}
```
 