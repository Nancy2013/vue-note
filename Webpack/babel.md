<!--
 * @Author: your name
 * @Date: 2020-03-05 13:59:29
 * @LastEditTime: 2022-06-10 14:51:43
 * @LastEditors: Juliette.Wang nannan.wang@broadlink.com.cn
 * @Description: In User Settings Edit
 * @FilePath: \vue-note\Vue\Babel.md
 -->

# Babel

## 功能

- JavaScript 编译器，用来编译 JavaScript 新的语法糖，以支持大多数浏览器的兼容性

## 配置

- presets(预设)
  - 可以理解为插件的集合，不需要我们在 plugins 中一个个的引入插件
  - 语法转义器
    - 编译 JavaScript 最新语法糖
    - babel-preset-env/babel-reset-xxxx
    - env 版本可以代替后面的 xxxx 版本
      - stage，不同版本的编译器向上兼容，stage-0 包括 stage-1(数值越低,级别越高)
  - 补丁转义器
    - es6 中新增了语法与 api，语法可以直接使用 preset-env 编译，但是新 api 需要安装@babel/polyfill
    - 负责 JavaScript 新增 api 和全局对象,如：Iterator、Generator、Set、Maps、Promise 等等全局对象
- plugins(插件)
  - es6 新 api 编译:babel-polyfill
  - 动态引入模块:syntax-dynamic-import
  - plugin-transform-runtime:开启 helper 注入的复用,创建沙箱环境,避免污染全局变量

## 原理

> babel 的编译过程分为三个阶段：parsing、transforming、generating
>
> - 载入 es6
> - babylon 解析生成 AST 抽象树
> - babel-traverse 对 AST 抽象树进行遍历编译，生成新的抽象树
> - 通过 babel-generator 生成 es5 代码

## 使用 babel 副作用

> 打包速度慢
>
> - 缩小搜索范围，通过配置 module，include/exclude，减少搜索范围
> - 配置 cacheDirectory: true,缓存编译结果，避免重新编译
>
> 打包体积大
>
> - babel-loader 对一些公共方法，会使用比较小的辅助代码，比如\_extend,会在所有需要它的文件中引入，导致打包后的体积过大，可以使用 plugin-transform-runtime 和 babel-runtime 开启复用
