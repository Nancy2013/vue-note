<!--
 * @Author: your name
 * @Date: 2020-04-27 14:36:59
 * @LastEditTime: 2020-04-27 14:37:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-note\Vue\Vue API\plugin.md
 -->

# plugin

## Vue-use

## 作用

注册全局插件

## 方法

- 需要在 new Vue()之前使用
- Vue.use() 可以防止多次注册同一个插件
- 参数为 Object 时，需要包含 install 方法
- 参数为 Function 时，默认当做 install 方法

## plugin vs component vs mixin

plugin : 实现全局功能，如：vue-router,vuex;
component : 一般包含 template script 标签，是可复用的 Vue 实例；
mixin : 用来分发组件功能；
