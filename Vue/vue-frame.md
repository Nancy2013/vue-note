<!--
 * @Author: your name
 * @Date: 2020-03-05 09:39:51
 * @LastEditTime: 2020-06-22 15:55:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-note\Vue\vue-frame.md
 -->

# Vue 框架结构

## package-lock.json 作用

- 安装包版本：[主版本号+次版本号+修正版本号](https://semver.org/lang/zh-CN/)
- 主版本号：新增不兼容功能
- 次版本号：新增功能向下兼容
- 修正版本：功能问题修正
- ~ 3.2.1:向下箭头表示支持更新低于 3.3.0 版本
- ^3.2.1：波浪号表示支持更新低于 4.0.0 的版本
- 作用是锁定项目当前安装依赖的版本，忽略某些依赖的更新，来保证重新 install 是的环境相同

## 编译文件

- app.hash.js:自己开发的业务代码
- vendor.hash.js：从 node_moudles 文件夹引入的第三方依赖库
- manifest.hash.js:从 vendor.js 分离出的模块管理的初始化代码，主要通过模块 id 管理模块加载，业务代码发生变化时，重新编译可以提高效率

## 别名

webpack 配置 resolve 别名 alias 后，可以在 js 及 vue 文件中，通过别名方法引入文件，`import 'commonPath/utils'`。如果需要在 style 标签内使用别名，可以通过`@import '~stylePath/base.less'`的方式。webpack 会把~前缀的路径作为依赖模块引入。
