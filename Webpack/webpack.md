<!--
 * @Author: your name
 * @Date: 2020-02-26 10:19:49
 * @LastEditTime: 2021-07-16 17:41:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-note\webpack.md
 -->

# Webpack

## Webpack 的作用

- 对 JavaScript 模块进行打包；
- 处理各个模块间的依赖关系；
- 对模块的语法转化为浏览器支持的语法；
- Webpack 的运行环境依赖于 node,node 要运行各种编译环境时依赖于各种包，通常是通过 npm 来管理；

## Loader 的使用

- Webpack 需要通过各种 loader 来处理 js、css 和图片文件；
- less-loader：将 less 文件编译为 css 文件，css-loader：用来加载 css 文件，style-loader:将 css 文件加载到 DOM 结构；
- Webpack 加载文件的顺序为从右到左；
- 使用 less-loader 前需要先安装 less,作用是识别 less 语法；
- url-loader 与 file-loader 的区别：url-loader 可以在 options 里面设置图片的大小限制，当图片小于限制时以 base64 位方式加载图片，而 file-loader 会把文件直接移动到对应文件夹；
- 配置 options 文件名时使用[name]表示变量名，哈希值默认为 32 位[hash:16]表示取 16 位哈希值，[ext]表示文件扩展名；
- babel-loader 可以将 es6 转为 es5 语法，使用时依赖 babel-core，babel-preset-env 为 babel 升级版，可以取代之前的 babel-preset-esXXXX，但需要配置.babelrc 文件;

## Loader 与 plugin 的区别

> Loader
>
> > Loader 是转换器，把 A 文件转换成 B 文件，可以把 index.less 转换成 index.css

> plugin
>
> > plugin 是扩展器，丰富了 webpack 本身，针对 loader 之后，webpack 打包的整个过程。它不直接操作文件，而且基于事件机制工作，监听 webpack 打包过程中的节点，并执行广泛的任务
