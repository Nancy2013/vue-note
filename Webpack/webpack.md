<!--
 * @Author: your name
 * @Date: 2020-02-26 10:19:49
 * @LastEditTime: 2021-09-07 11:18:57
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

## Loader 与 plugin 的区别

> Loader
>
> > Loader 是转换器，通过链式调用，把 A 文件转换成 B 文件，可以把 index.less 转换成 index.css

> plugin
>
> > plugin 是扩展器，丰富了 webpack 本身，针对 loader 之后，webpack 打包的整个过程。它不直接操作文件，而且基于事件流机制，监听 webpack 打包过程中的节点，并执行广泛的任务
