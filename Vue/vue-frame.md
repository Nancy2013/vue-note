<!--
 * @Author: your name
 * @Date: 2020-03-05 09:39:51
 * @LastEditTime: 2020-03-05 17:35:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-note\Vue\vue-frame.md
 -->

## Vue 框架结构

#### package-lock.json 作用

- 安装包版本：主版本号+次版本号+修正版本号
- 主版本号：新增不兼容功能
- 次版本号：新增功能向下兼容
- 修正版本：功能问题修正
- ~ 3.2.1:向下箭头表示支持更新低于 3.3.0 版本
- ^3.2.1：波浪号表示支持更新低于 4.0.0 的版本
- 作用是锁定项目当前安装依赖的版本，忽略某些依赖的更新，来保证重新 install 是的环境相同

## 编译文件

- mainfest.hash.js
- app.hash.js
- vendor.hash.js
